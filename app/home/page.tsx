"use client";
import { useSearchParams } from "next/navigation";
import PageWrapper from "@/components/PageWrapper/page";

const Home = () => {
  const param = useSearchParams().get("branch");
  return (
    <PageWrapper>
      <div>Home{param}</div>
    </PageWrapper>
  );
};

export default Home;
