"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface NavbarButtonProps {
  id: string;
  title: string;
}

const NavbarButton = ({ id, title }: NavbarButtonProps) => {
  const pathname = usePathname().split("/").pop();
  const branch = useSearchParams().get("branch");
  const router = useRouter();
  const handleClick = (destination: string) => {
    router.push(`/${destination}?branch=${branch}`);
  };
  return (
    <button
      onClick={() => handleClick(id)}
      className={`hover:text-indigo-800 ${
        pathname === id && "underline underline-offset-8"
      }`}
    >
      {title}
    </button>
  );
};

export default NavbarButton;
