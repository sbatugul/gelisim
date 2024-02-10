"use client";
import { Lexend } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const lexend = Lexend({ subsets: ["latin"] });

const NavBar = () => {
  const pathname = usePathname().split("/").pop();
  const branch = useSearchParams().get("branch");
  const router = useRouter();
  const handleClick = (destination: string) => {
    router.push(`/${destination}?branch=${branch}`);
  };
  return (
    <div
      className={`w-full h-20 bg-white shadow-xl flex flex-row items-center ${lexend.className}`}
    >
      <div className="flex flex-row justify-between w-full m-96  ">
        <div>LOGO</div>

        <div className="flex flex-row gap-5 font-medium">
          <button
            onClick={() => handleClick("home")}
            className={`hover:text-indigo-800 ${
              pathname === "home" && "underline underline-offset-8"
            }`}
          >
            Anasayfa
          </button>
          <button
            onClick={() => handleClick("education")}
            className={`hover:text-indigo-800 ${
              pathname === "education" && "underline underline-offset-8"
            }`}
          >
            Eğitimlerimiz
          </button>
          <button
            onClick={() => handleClick("corparate")}
            className={`hover:text-indigo-800 ${
              pathname === "corparate" && "underline underline-offset-8"
            }`}
          >
            Kurumsal
          </button>
          <button
            onClick={() => handleClick("faq")}
            className={`hover:text-indigo-800 ${
              pathname === "faq" && "underline underline-offset-8"
            }`}
          >
            Yardım
          </button>
          <button
            onClick={() => handleClick("contact")}
            className={`hover:text-indigo-800 ${
              pathname === "contact" && "underline underline-offset-8"
            }`}
          >
            İletişim
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
