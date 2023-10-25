"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var TagSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    question: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Question" }],
    followers: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    createdOn: { type: Date, "default": Date.now }
});
var Tag = mongoose_1.models.Tag || mongoose_1.model("Tag", TagSchema);
exports["default"] = Tag;
