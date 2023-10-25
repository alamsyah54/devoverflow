"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var nextjs_1 = require("@clerk/nextjs");
var google_1 = require("next/font/google");
var react_1 = require("react");
var ThemeProvider_1 = require("@/context/ThemeProvider");
var inter = google_1.Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter"
});
var spaceGrotesk = google_1.Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-spaceGrotesk"
});
exports.metadata = {
    title: "DevOverflow",
    description: "DevOverflow - A platform for knowledge exchange and collaboration within a specific niche or industry, where users can ask questions, provide answers, and build their expertise. Join a vibrant community of experts today.",
    icons: {
        icon: "/assets/images/site-logo.svg"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement(nextjs_1.ClerkProvider, { appearance: {
                elements: {
                    formButtonPrimary: "primary-gradient ",
                    footerActionLink: "primary-text-gradient hover:text-primary-500"
                }
            } },
            react_1["default"].createElement("body", { className: inter.className + " " + spaceGrotesk.className },
                react_1["default"].createElement(ThemeProvider_1.ThemeProvider, null, children)))));
}
exports["default"] = RootLayout;
