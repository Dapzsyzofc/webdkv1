import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : defaultValue;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Storage full or blocked — silent fail
        }
    }, [key, value]);

    return [value, setValue];
}
