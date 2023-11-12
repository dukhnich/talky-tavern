import { useEffect, } from "react";
import { useDispatch } from 'react-redux'

export function useLocalStorage (index, storeValue, setter)  {
    const dispatch = useDispatch();
    useEffect(() => {
        const handler = () => {
            const value = localStorage.getItem(index);
            if (value !== storeValue) {
                dispatch(setter(value));
            }
        };
        const localStorageListener = () => {
            handler();
        };
        window.addEventListener("storage", localStorageListener);
        handler();
        return () => {
            window.removeEventListener("storage", localStorageListener);
        };
    }, []);
    useEffect(() => {
        const value = localStorage.getItem(index);
        if (value !== storeValue) {
            localStorage.setItem(index, storeValue);
        }
    }, [storeValue]);
};

