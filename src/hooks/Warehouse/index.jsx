import { useEffect } from "react";

const Warehouse = ({ index, state, setter }) => {
  useEffect(() => {
    const handler = () => {
      const value = localStorage.getItem(index);
      if (value !== state) {
        setter(value);
      }
    };
    const localStorageListener = () => {
      handler();
    };
    window.addEventListener("storage", localStorageListener);
    handler();
  }, []);
  useEffect(() => {
    const value = localStorage.getItem(index);
    if (value !== state) {
      localStorage.setItem(index, state);
    }
  }, [state]);

  return <></>;
};

export default Warehouse;
