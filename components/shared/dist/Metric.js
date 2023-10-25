"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var Metric = function (_a) {
    var imgUrl = _a.imgUrl, alt = _a.alt, value = _a.value, title = _a.title, href = _a.href, textStyle = _a.textStyle, isAuthor = _a.isAuthor;
    var metricContent = (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(image_1["default"], { src: imgUrl, width: 16, height: 16, alt: alt, className: "object-contain " + (href ? "rounded-full" : "") }),
        react_1["default"].createElement("p", { className: textStyle + " flex items-center gap-1" },
            value,
            react_1["default"].createElement("span", { className: "small-regular line-clamp-1 " + (isAuthor ? "max-md:hidden max-sm:hidden" : "") }, title))));
    if (href) {
        return (react_1["default"].createElement(link_1["default"], { href: href, className: "flex-center gap-1" }, metricContent));
    }
    return react_1["default"].createElement("div", { className: "flex-center flex-wrap gap-1" }, metricContent);
};
exports["default"] = Metric;
