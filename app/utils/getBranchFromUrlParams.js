import { useSearchParams } from "next/navigation";

const getBranchFromUrlParams = () => {
  const searchParams = useSearchParams();
  return searchParams.get("branch") && "turgutlu";
};

export default getBranchFromUrlParams;
