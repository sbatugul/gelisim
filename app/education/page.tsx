"use client";
import PageWrapper from "@/components/PageWrapper/page";
import branchData from "@/app/lib/branch-data";
import { useSearchParams } from "next/navigation";
import EducationCard from "@/components/EducationCard/page";

const Education = () => {
  const currentBranch = useSearchParams().get("branch");
  const getCurrentBranchData = () => {
    for (let i = 0; i < branchData.length; i++) {
      if (branchData[i].id === currentBranch) {
        return branchData[i].educations;
      }
    }
  };
  const educations = getCurrentBranchData();
  return (
    <PageWrapper>
      <div className="w-full gap-2 grid grid-cols-3 grid-rows-2 overflow-hidden ">
        {educations?.map((education, i) => {
          return <EducationCard education={education} key={i} />;
        })}
      </div>
    </PageWrapper>
  );
};

export default Education;
