import { useCallback, useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasAuthHardware, setHasAuthHardware] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      const hasHardwareAsync = await LocalAuthentication.hasHardwareAsync();
      setHasAuthHardware(hasAuthHardware);

      if (hasHardwareAsync) {
        const result = await LocalAuthentication.authenticateAsync();
        setIsAuthenticated(result.success);
      }
    } catch (error) {
      console.log({ error });

      setHasAuthHardware(false);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    isAuthenticated,
    handleAuthenticate,
  };
};

export default useAuthentication;
