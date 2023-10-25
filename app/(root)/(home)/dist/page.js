"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var LocalSearchbar_1 = require("@/components/shared/search/LocalSearchbar");
var Filter_1 = require("@/components/shared/Filter");
var button_1 = require("@/components/ui/button");
var link_1 = require("next/link");
var filters_1 = require("@/constants/filters");
var HomeFilters_1 = require("@/components/shared/home/HomeFilters");
var NoResult_1 = require("@/components/shared/NoResult");
var QuestionCard_1 = require("@/components/cards/QuestionCard");
var question_action_1 = require("@/lib/actions/question.action");
function Home() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, question_action_1.getQuestions({})];
                case 1:
                    result = _a.sent();
                    console.log("====================================");
                    console.log(result.questions);
                    console.log("====================================");
                    return [2 /*return*/, (React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center" },
                                React.createElement("h1", { className: "h1-bold text-dark100_light900" }, "All Questions"),
                                React.createElement("div", { className: "flex justify-end max-sm:w-full" },
                                    React.createElement(link_1["default"], { href: "/ask-question" },
                                        React.createElement(button_1.Button, { className: "primary-gradient min-h-[46px] px-4 py-3 !text-light-900" }, "Ask a Question")))),
                            React.createElement("div", { className: "mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center" },
                                React.createElement(LocalSearchbar_1["default"], { route: "/", iconPosition: "left", placeholder: "Search for questions", otherClasses: "flex-1" }),
                                React.createElement(Filter_1["default"], { filters: filters_1.HomePageFilters, otherClasses: "min-h-[56px] sm:min-w-[170px]", containerClasses: "hidden max-md:flex" })),
                            React.createElement(HomeFilters_1["default"], null),
                            React.createElement("div", { className: "text-dark500_light700 mt-10 flex w-full flex-col gap-6" }, result.questions.length > 0 ? (result.questions.map(function (question) { return (React.createElement(QuestionCard_1["default"], { key: question._id, _id: question._id, title: question.title, tags: question.tags, author: question.author, upvotes: question.upvotes, views: question.views, answers: question.answers, createdAt: question.createdAt })); })) : (React.createElement(NoResult_1["default"], { title: "There's no question to show", description: "Be the first to break the silence! Ask a Question and kickstart the\n        discussion. our query could be the next big things others learn from.\n        Get involved!", link: "/ask-question", linkTitle: "Ask a Question" })))))];
            }
        });
    });
}
exports["default"] = Home;
