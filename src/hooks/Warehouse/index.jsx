import { useEffect } from "react";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setKey } from "../../store/reducers/chatSlice";

const Warehouse = ({ index }) => {
  const apiKey = useSelector(state => {
    console.log(-1, state)
    return state.chat.key
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const handler = () => {
      const value = localStorage.getItem(index);
      console.log(-2, value, apiKey, index)
      if (value !== apiKey) {
        dispatch(setKey(value));
      }
    };
    const localStorageListener = () => {
      console.log(5)
      handler();
    };
    window.addEventListener("storage", localStorageListener);
    handler();
  }, []);

  return <></>;
};

export default Warehouse;
