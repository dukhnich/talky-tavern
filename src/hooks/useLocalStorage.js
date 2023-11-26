import { useEffect, } from "react";
import { useDispatch } from 'react-redux'
import JSONSerializer from "../services/serializer/JSONSerializer";

export function useLocalStorage (index, storeValue, setter, isLocalSetter)  {
    const dispatch = useDispatch();
    const serializer = new JSONSerializer();
    // console.log(index, storeValue);
    useEffect(() => {
        const localStoreToStageTransport = () => {
            const data = localStorage.getItem(index);
            let value;
            try {
                value = JSON.parse(data)
            } catch (e) {
                value = data
            }
            if (value !== storeValue) {
                isLocalSetter ? setter(value) : dispatch(setter(value));
            }
        };
        const localStorageListener = () => {
            localStoreToStageTransport();
        };
        window.addEventListener("storage", localStorageListener);
        localStoreToStageTransport();
        return () => {
            window.removeEventListener("storage", localStorageListener);
        };
    }, []);
    // stageToLocalStoreTransport
    useEffect(() => {
        const value = localStorage.getItem(index);
        if (value !== storeValue) {
            localStorage.setItem(index, storeValue);
        }
    }, [storeValue]);
};

