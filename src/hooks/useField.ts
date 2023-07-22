import { useState } from "react";

const useField = ({ type }: any) => {
  const [value, setValue] = useState("");

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return { onChange, value, type, clear };
};
export default useField;
