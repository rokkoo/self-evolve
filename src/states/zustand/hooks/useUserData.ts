import useUserStore from "..";

const useUserData = () => {
  const state = useUserStore((state) => state);

  return { ...state };
};

export default useUserData;
