"use strict";
exports.__esModule = true;
var input_1 = require("@/components/ui/input");
var bi_1 = require("react-icons/bi");
var GlobalSearch = function () {
    return (React.createElement("div", { className: "group relative w-full max-w-[600px] rounded-xl border-[1px] shadow-sm dark:border-black dark:shadow-black max-lg:hidden" },
        React.createElement("div", { className: "group-hover:background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-3 rounded-xl px-4" },
            React.createElement(bi_1.BiSearch, { className: "text-dark400_light900 cursor-pointer text-2xl" }),
            React.createElement(input_1.Input, { type: "text", placeholder: "Search", className: "paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none" }))));
};
exports["default"] = GlobalSearch;
