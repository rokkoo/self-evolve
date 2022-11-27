import useUserResumePostStore from "../stores/useUserResumePostStore";

const useUserResumePost = () => {
  const state = useUserResumePostStore((state) => state);

  return { ...state };
};

export default useUserResumePost;
