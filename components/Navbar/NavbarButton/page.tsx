"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface NavbarButtonProps {
  buttonData: {
    id: string;
    title: string;
  };
}

const NavbarButton = ({ buttonData }: NavbarButtonProps) => {
  const pathname = usePathname().split("/").pop();
  const branch = useSearchParams().get("branch");
  const router = useRouter();
  const handleClick = (destination: string) => {
    router.push(`/${destination}?branch=${branch}`);
  };
  return (
    <button
      onClick={() => handleClick(buttonData.id)}
      className={`hover:text-indigo-800 ${
        pathname === buttonData.id && "underline underline-offset-8"
      }`}
    >
      {buttonData.title}
    </button>
  );
};

export default NavbarButton;
