"use client";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearchbar = ({
  route,
  iconPosition,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 shadow-sm dark:border-black dark:shadow-gray-800 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <BiSearch className="text-dark400_light900 cursor-pointer text-2xl" />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <BiSearch className="text-dark400_light900 cursor-pointer text-2xl" />
      )}
    </div>
  );
};

export default LocalSearchbar;
