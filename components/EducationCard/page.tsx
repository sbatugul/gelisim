import Image from "next/image";

interface EducationCardProps {
  education: any;
}
const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className=" overflow-hidden relative h-500 group">
      <Image
        src={education.photo}
        alt=""
        fill
        className="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-105 transition ease-in duration-500 cursor-pointer  "
      />
      <div className="flex flex-col  absolute bottom-0 w-full px-4 h-1/6 z-20 items-center justify-center  bg-punch-400">
        <div className="text-xl font-bold text-neutral-50 text-center group-hover:scale-110 transition ease-in duration-500 cursor-pointer  ">
          {education?.name}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
