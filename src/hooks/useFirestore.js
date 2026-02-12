import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION = 'siteConfig';

/**
 * Hook that syncs React state with Firestore.
 * - Reads data from Firestore in real-time (onSnapshot)
 * - Writes data to Firestore when state changes via admin
 * - Falls back to defaultValue if no Firestore data exists
 * - Also caches to localStorage for offline/fast loading
 */
export function useFirestore(key, defaultValue) {
    const [value, setValue] = useState(() => {
        // Try localStorage cache first for instant load
        try {
            const cached = localStorage.getItem(`xdkv1-${key}`);
            return cached ? JSON.parse(cached) : defaultValue;
        } catch {
            return defaultValue;
        }
    });
    const [loaded, setLoaded] = useState(false);

    // Subscribe to Firestore real-time updates
    useEffect(() => {
        const docRef = doc(db, COLLECTION, key);

        const unsubscribe = onSnapshot(
            docRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data().value;
                    setValue(data);
                    // Cache to localStorage
                    try {
                        localStorage.setItem(`xdkv1-${key}`, JSON.stringify(data));
                    } catch { /* ignore */ }
                }
                setLoaded(true);
            },
            (error) => {
                console.warn(`Firestore read error for "${key}":`, error.message);
                setLoaded(true);
            }
        );

        return () => unsubscribe();
    }, [key]);

    // Custom setter that writes to Firestore
    const setFirestoreValue = async (newValue) => {
        const resolved = typeof newValue === 'function' ? newValue(value) : newValue;
        setValue(resolved);

        // Cache locally immediately
        try {
            localStorage.setItem(`xdkv1-${key}`, JSON.stringify(resolved));
        } catch { /* ignore */ }

        // Write to Firestore
        try {
            const docRef = doc(db, COLLECTION, key);
            await setDoc(docRef, { value: resolved });
        } catch (error) {
            console.warn(`Firestore write error for "${key}":`, error.message);
        }
    };

    return [value, setFirestoreValue, loaded];
}
