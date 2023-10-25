import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";

const GlobalSearch = () => {
  return (
    <div className="group relative w-full max-w-[600px] rounded-xl border-[1px] shadow-sm dark:border-black dark:shadow-black max-lg:hidden">
      <div className="group-hover:background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-3 rounded-xl px-4">
        <BiSearch className="text-dark400_light900 cursor-pointer text-2xl" />
        <Input
          type="text"
          placeholder="Search"
          className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
