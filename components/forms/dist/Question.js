"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var button_1 = require("../ui/button");
var validations_1 = require("@/lib/validations");
var react_1 = require("react");
var tinymce_react_1 = require("@tinymce/tinymce-react");
var badge_1 = require("../ui/badge");
var image_1 = require("next/image");
var os_1 = require("os");
var question_action_1 = require("@/lib/actions/question.action");
var navigation_1 = require("next/navigation");
var Question = function (_a) {
    var mongoUserId = _a.mongoUserId;
    var editorRef = react_1.useRef(null);
    var _b = react_1.useState(false), isSubmitting = _b[0], setIsSubmitting = _b[1];
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    // 1. Define your form.
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(validations_1.QuestionsSchema),
        defaultValues: {
            title: "",
            explanation: "",
            tags: []
        }
    });
    // 2. Define a submit handler.
    function onSubmit(values) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsSubmitting(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        // Make and async call to your API for create a question
                        // contain all form data
                        return [4 /*yield*/, question_action_1.createQuestion({
                                title: values.title,
                                content: values.explanation,
                                tags: values.tags,
                                author: JSON.parse(mongoUserId),
                                path: pathname
                            })];
                    case 2:
                        // Make and async call to your API for create a question
                        // contain all form data
                        _a.sent();
                        // navigate to home page
                        router.push("/");
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        setIsSubmitting(false);
                        return [7 /*endfinally*/];
                    case 5:
                        console.log(values);
                        return [2 /*return*/];
                }
            });
        });
    }
    var handleInputKeyDown = function (e, field) {
        if (e.key === "Enter" && field.name === "tags") {
            e.preventDefault();
            var tagInput = e.target;
            var tagValue = tagInput.value.trim();
            if (tagValue !== "") {
                if (tagValue.length > 15) {
                    return form.setError("tags", {
                        type: "required",
                        message: "Tags must be less than 15 characters."
                    });
                }
                if (!field.value.includes(tagValue)) {
                    form.setValue("tags", __spreadArrays(field.value, [tagValue]));
                    tagInput.value = "";
                    form.clearErrors("tags");
                }
            }
            else {
                form.trigger();
            }
        }
    };
    var handleTagRemove = function (tag, field) {
        var newTags = field.value.filter(function (t) { return t !== tag; });
        form.setValue("tags", newTags);
    };
    return (react_1["default"].createElement(form_1.Form, __assign({}, form),
        react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex w-full flex-col gap-10" },
            react_1["default"].createElement(form_1.FormField, { control: form.control, name: "title", render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(form_1.FormItem, { className: "flex w-full flex-col gap-1" },
                        react_1["default"].createElement(form_1.FormLabel, { className: "paragraph-semibold text-dark400_light800" },
                            "Question Title ",
                            react_1["default"].createElement("span", { className: "text-primary-500" }, "*")),
                        react_1["default"].createElement(form_1.FormControl, { className: "mt-3.5" },
                            react_1["default"].createElement(input_1.Input, __assign({ className: "no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" }, field))),
                        react_1["default"].createElement(form_1.FormDescription, { className: "body-regular mt-2.5 text-light-500" }, "Be specific and imagine you're asking a question to another person."),
                        react_1["default"].createElement(form_1.FormMessage, { className: "text-red-600" })));
                } }),
            react_1["default"].createElement(form_1.FormField, { control: form.control, name: "explanation", render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(form_1.FormItem, { className: "flex w-full flex-col gap-3" },
                        react_1["default"].createElement(form_1.FormLabel, { className: "paragraph-semibold text-dark400_light800" },
                            "Detail explanation of your problem",
                            " ",
                            react_1["default"].createElement("span", { className: "text-primary-500" }, "*")),
                        react_1["default"].createElement(form_1.FormControl, { className: "mt-3.5" },
                            react_1["default"].createElement(tinymce_react_1.Editor, { apiKey: process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY, onInit: function (evt, editor) {
                                    // @ts-ignore
                                    return (editorRef.current = editor);
                                }, onBlur: field.onBlur, onEditorChange: function (content) { return field.onChange(content); }, initialValue: "", init: {
                                    height: 350,
                                    menubar: false,
                                    plugins: [
                                        "advlist",
                                        "autolink",
                                        "lists",
                                        "link",
                                        "image",
                                        "charmap",
                                        "preview",
                                        "anchor",
                                        "searchreplace",
                                        "visualblocks",
                                        "code",
                                        "media",
                                        "table",
                                        "code",
                                        "help",
                                        "wordcount",
                                        "codesample",
                                    ],
                                    toolbar: "undo redo | " +
                                        "bold italic forecolor | alignleft aligncenter " +
                                        "codesample | alignright alignjustify | bullist numlist | " +
                                        "removeformat | help",
                                    content_style: "body { font-family:Inter; font-size:16px }"
                                } })),
                        react_1["default"].createElement(form_1.FormDescription, { className: "body-regular mt-2.5 text-light-500" }, "Introduce the problem and expand on what you put in the title. Minimum 20 characters."),
                        react_1["default"].createElement(form_1.FormMessage, { className: "text-red-600" })));
                } }),
            react_1["default"].createElement(form_1.FormField, { control: form.control, name: "tags", render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(form_1.FormItem, { className: "flex w-full flex-col gap-1" },
                        react_1["default"].createElement(form_1.FormLabel, { className: "paragraph-semibold text-dark400_light800" },
                            "Question Title ",
                            react_1["default"].createElement("span", { className: "text-primary-500" }, "*")),
                        react_1["default"].createElement(form_1.FormControl, { className: "mt-3.5" },
                            react_1["default"].createElement(input_1.Input, { className: "no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border", placeholder: "Add tags...", onKeyDown: function (e) { return handleInputKeyDown(e, field); } })),
                        field.value.length > 0 && (react_1["default"].createElement("div", { className: "flex-start mt-2.5 gap-2.5" }, field.value.map(function (tag) { return (react_1["default"].createElement(badge_1.Badge, { key: tag, className: "subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize", onClick: function () { return handleTagRemove(tag, field); } },
                            tag,
                            react_1["default"].createElement(image_1["default"], { src: "/assets/icons/close.svg", alt: "Close Icon", width: 12, height: 12, className: "cursor-pointer object-contain invert-0 dark:invert" }))); }))),
                        react_1["default"].createElement(form_1.FormDescription, { className: "body-regular mt-2.5 text-light-500" }, "Add up to 3 tags to describe what your question is about. You need to press enter to add a tag."),
                        react_1["default"].createElement(form_1.FormMessage, { className: "text-red-600" })));
                } }),
            react_1["default"].createElement(button_1.Button, { type: "submit", className: "primary-gradient w-fit !text-light-900", disabled: isSubmitting }, isSubmitting ? (
            // @ts-ignore
            react_1["default"].createElement(react_1["default"].Fragment, null, os_1.type === "edit" ? "Editing..." : "Posting...")) : (
            // @ts-ignore
            react_1["default"].createElement(react_1["default"].Fragment, null, os_1.type === "edit" ? "Edit Question" : "Ask a Question"))))));
};
exports["default"] = Question;
