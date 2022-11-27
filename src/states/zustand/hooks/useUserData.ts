import useUserStore from "../stores/useUserDataStore";

const useUserData = () => {
  const state = useUserStore((state) => state);

  return { ...state };
};

export default useUserData;
