/* eslint-disable camelcase */
"use strict";

exports.__esModule = true;

var link_1 = require("next/link");

var react_1 = require("react");

var RenderTag_1 = require("../shared/RenderTag");

var Metric_1 = require("../shared/Metric");

var utils_1 = require("@/lib/utils");

var QuestionCard = function QuestionCard(_a) {
  var _id = _a._id;
  var title = _a.title;
  var tags = _a.tags;
  var author = _a.author;
  var upvotes = _a.upvotes;
  var views = _a.views;
  var answers = _a.answers;
  var createdAt = _a.createdAt;
  return react_1["default"].createElement("div", {
    className: "card-wrapper rounded-[10px] p-9 sm:px-11"
  }, react_1["default"].createElement("div", {
    className: "flex flex-col-reverse items-start justify-between gap-5 sm:flex-row"
  }, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "mb-2 hidden gap-2 divide-x-2 max-md:flex max-sm:flex"
  }, react_1["default"].createElement(Metric_1["default"], {
    imgUrl: "/assets/icons/avatar.svg",
    alt: "User",
    value: author.name,
    title: " | asked " + utils_1.getTimestamp(createdAt),
    href: "/profile/" + author._id,
    isAuthor: true,
    textStyle: "small-medium text-dark400_light800"
  }), react_1["default"].createElement("span", {
    className: "subtle-regular text-dark400_light700 line-clamp-1 flex px-2 lg:hidden"
  }, utils_1.getTimestamp(createdAt))), react_1["default"].createElement(link_1["default"], {
    href: "/question/" + _id
  }, react_1["default"].createElement("h3", {
    className: "h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1"
  }, title)))), react_1["default"].createElement("div", {
    className: "mt-3.5 flex flex-wrap gap-2"
  }, tags.map(function (tag) {
    return react_1["default"].createElement(RenderTag_1["default"], {
      key: tag._id,
      _id: tag._id,
      name: tag.name
    });
  })), react_1["default"].createElement("div", {
    className: "flex-between mt-6 w-full flex-wrap gap-3"
  }, react_1["default"].createElement("div", {
    className: "max-md:hidden max-sm:hidden "
  }, react_1["default"].createElement(Metric_1["default"], {
    imgUrl: "/assets/icons/avatar.svg",
    alt: "User",
    value: author.name,
    title: " | asked " + utils_1.getTimestamp(createdAt),
    href: "/profile/" + author._id,
    isAuthor: true,
    textStyle: "small-medium text-dark400_light800"
  })), react_1["default"].createElement("div", {
    className: "flex items-center gap-3"
  }, react_1["default"].createElement(Metric_1["default"], {
    imgUrl: "/assets/icons/like.svg",
    alt: "Upvotes",
    value: utils_1.formatedNumber(upvotes),
    title: " Votes",
    textStyle: "small-medium text-dark400_light800"
  }), react_1["default"].createElement(Metric_1["default"], {
    imgUrl: "/assets/icons/message.svg",
    alt: "Upvotes",
    value: utils_1.formatedNumber(answers.length),
    title: " Answers",
    textStyle: "small-medium text-dark400_light800"
  }), react_1["default"].createElement(Metric_1["default"], {
    imgUrl: "/assets/icons/eye.svg",
    alt: "Upvotes",
    value: utils_1.formatedNumber(views),
    title: " Views",
    textStyle: "small-medium text-dark400_light800"
  }))));
};

exports["default"] = QuestionCard;