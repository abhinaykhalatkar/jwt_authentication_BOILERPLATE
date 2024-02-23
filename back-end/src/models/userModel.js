"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_2 = require("mongoose");
var UserSchema = new mongoose_2.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },
    hash_password: {
        type: String,
    },
    tokenGernratedOn: {
        type: Date,
        default: Date.now,
    },
});
UserSchema.methods.comparePassword = function (password) {
    return bcrypt_1.default.compareSync(password, this.hash_password);
};
mongoose_1.default.model("User", UserSchema);
