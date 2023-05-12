import { useState } from "react";

export const useBoolean = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return {
    toggle,
    toggleHandler,
  };
};
