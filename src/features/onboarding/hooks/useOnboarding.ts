import { useCallback, useState } from "react";

const useOnboarding = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = useCallback((name: string) => {
    setUsername(name);
  }, []);

  return {
    username,
    handleInputChange,
  };
};

export default useOnboarding;
