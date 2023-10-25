"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var Theme_1 = require("./Theme");
var MobileNav_1 = require("./MobileNav");
var GlobalSearch_1 = require("@/components/shared/search/GlobalSearch");
var Navbar = function () {
    return (react_1["default"].createElement("nav", { className: "flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 max-sm:shadow-lg max-sm:shadow-primary-500/10 sm:px-12" },
        react_1["default"].createElement(link_1["default"], { href: "/", className: "flex items-center gap-1" },
            react_1["default"].createElement(image_1["default"], { src: "/assets/images/site-logo.svg", alt: "Dev Overflow", width: 23, height: 23 }),
            react_1["default"].createElement("p", { className: "h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden" },
                "Dev",
                react_1["default"].createElement("span", { className: "text-primary-500" }, "Overflow"))),
        react_1["default"].createElement(GlobalSearch_1["default"], null),
        react_1["default"].createElement("div", { className: "flex-between gap-5" },
            react_1["default"].createElement(Theme_1["default"], null),
            react_1["default"].createElement(nextjs_1.SignedIn, null,
                react_1["default"].createElement(nextjs_1.UserButton, { afterSignOutUrl: "/", appearance: {
                        elements: {
                            avatarBox: "h-10 w-10"
                        },
                        variables: {
                            colorPrimary: "#05a8e3"
                        }
                    } })),
            react_1["default"].createElement(MobileNav_1["default"], null))));
};
exports["default"] = Navbar;
