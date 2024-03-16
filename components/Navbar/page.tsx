import { Lexend } from "next/font/google";
import NavbarButton from "./NavbarButton/page";
import navbarData from "../../app/lib/navbar-data";

const lexend = Lexend({ subsets: ["latin"] });

const NavBar = () => {
  return (
    <div
      className={` h-20 bg-white shadow-xl flex flex-row items-center ${lexend.className} px-4 lg:px-64  `}
    >
      <div className="flex flex-row justify-between w-full">
        <div>LOGO</div>
        <div className="flex flex-row gap-5 font-medium">
          {navbarData.map((buttonData, i) => {
            return (
              <NavbarButton
                key={i}
                id={buttonData.id}
                title={buttonData.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
