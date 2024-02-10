"use client";
import { useRouter } from "next/navigation";

interface BranchCardProps {
  branch: {
    id: string;
    name: string;
  };
}

const BranchCard = ({ branch }: BranchCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/home?branch=${branch.id}`);
  };
  return (
    <div
      onClick={handleClick}
      id={branch.id}
      className="card w-96 bg-base-100 shadow-xl image-full"
    >
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{branch.name}</p>
      </div>
    </div>
  );
};

export default BranchCard;
