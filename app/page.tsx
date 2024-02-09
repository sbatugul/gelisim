import BranchCard from "@/components/BranchCard/page";
import branch from "./lib/branch-data";

const LandingPage = () => {
  return (
    <main>
      <BranchCard branch={branch[0]} />
      <BranchCard branch={branch[1]} />
    </main>
  );
};

export default LandingPage;
