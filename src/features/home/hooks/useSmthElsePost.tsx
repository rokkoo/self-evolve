import { useCallback, useState } from "react";

const useSmthElse = () => {
  const [smthElse, setSmthElse] = useState("");

  const handleSmthElseInputChange = useCallback((name: string) => {
    setSmthElse(name);
  }, []);

  return {
    smthElse,
    handleSmthElseInputChange,
  };
};

export default useSmthElse;
