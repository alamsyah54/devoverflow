"use server";
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
exports.createQuestion = exports.getQuestions = void 0;
var question_model_1 = require("@/database/question.model");
var mongoose_1 = require("../mongoose");
var tag_model_1 = require("@/database/tag.model");
var user_model_1 = require("@/database/user.model");
var cache_1 = require("next/cache");
function getQuestions(params) {
    return __awaiter(this, void 0, void 0, function () {
        var questions, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    mongoose_1.connectToDatabase();
                    return [4 /*yield*/, question_model_1["default"].find({})
                            .populate({ path: "tags", model: tag_model_1["default"] })
                            .populate({ path: "author", model: user_model_1["default"] })
                            .sort({ createdAt: -1 })];
                case 1:
                    questions = _a.sent();
                    return [2 /*return*/, { questions: questions }];
                case 2:
                    error_1 = _a.sent();
                    console.log("====================================");
                    console.log(error_1);
                    console.log("====================================");
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getQuestions = getQuestions;
function createQuestion(params) {
    return __awaiter(this, void 0, void 0, function () {
        var title, content, tags, author, path, question, tagDocuments, _i, tags_1, tag, existingTag, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    mongoose_1.connectToDatabase();
                    title = params.title, content = params.content, tags = params.tags, author = params.author, path = params.path;
                    return [4 /*yield*/, question_model_1["default"].create({
                            title: title,
                            content: content,
                            author: author
                        })];
                case 1:
                    question = _a.sent();
                    tagDocuments = [];
                    _i = 0, tags_1 = tags;
                    _a.label = 2;
                case 2:
                    if (!(_i < tags_1.length)) return [3 /*break*/, 5];
                    tag = tags_1[_i];
                    return [4 /*yield*/, tag_model_1["default"].findOneAndUpdate({ name: { $regex: new RegExp("^" + tag + "$", "i") } }, { $setOnInsert: { name: tag }, $push: { question: question._id } }, { upsert: true, "new": true })];
                case 3:
                    existingTag = _a.sent();
                    tagDocuments.push(existingTag._id);
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, question_model_1["default"].findByIdAndUpdate(question._id, {
                        $push: { tag: { $each: tagDocuments } }
                    })];
                case 6:
                    _a.sent();
                    // Create an interaction record for the user's ask_question action
                    // Increment authors reputation by +5 for creating a question
                    cache_1.revalidatePath(path);
                    return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.createQuestion = createQuestion;
