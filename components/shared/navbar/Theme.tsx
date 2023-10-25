"use client";

import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

import { BsFillSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="group relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 group-hover:cursor-pointer data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <BsFillSunFill className="active-theme text-2xl" />
          ) : (
            <BiSolidMoon className="active-theme text-2xl" />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-850 py-2 dark:border-dark-400 dark:bg-dark-300">
          <MenubarItem
            key="light"
            onClick={() => {
              setMode("light");
              localStorage.theme = "light";
            }}
            className={`flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400 ${
              mode === "light" && "active-theme"
            }`}
          >
            <BsFillSunFill
              className={`${
                mode === "light" ? "active-theme" : "text-light-500"
              }`}
            />
            <p
              className={`body-semibold text-light-500 ${
                mode === "light" ? "text-primary-500" : "text-dark100_light900"
              }`}
            >
              Light
            </p>
          </MenubarItem>

          <MenubarItem
            key="dark"
            onClick={() => {
              setMode("dark");
              localStorage.theme = "dark";
            }}
            className={`flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400 ${
              mode === "dark" && "active-theme"
            }`}
          >
            <BiSolidMoon
              className={`${
                mode === "dark" ? "active-theme" : "text-light-500"
              }`}
            />
            <p
              className={`body-semibold text-light-500 ${
                mode === "dark" ? "text-primary-500" : "text-dark100_light900"
              }`}
            >
              Dark
            </p>
          </MenubarItem>

          <MenubarItem
            key="system"
            onClick={() => {
              setMode("system");
              localStorage.removeItem("theme");
            }}
            className={`flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400 ${
              mode === "system" && "active-theme"
            }`}
          >
            <RiComputerFill
              className={`${
                mode === "system" ? "active-theme" : "text-light-500"
              }`}
            />
            <p
              className={`body-semibold text-light-500 ${
                mode === "system" ? "text-primary-500" : "text-dark100_light900"
              }`}
            >
              System
            </p>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
