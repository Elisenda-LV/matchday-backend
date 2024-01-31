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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListSports = void 0;
const sports_models_1 = __importDefault(require("../models/sports.models"));
//Show Sports list:
const getListSports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sports = yield sports_models_1.default.findAll();
        if (sports.length === 0) {
            res.status(404).json({ message: "No sports found" });
        }
        else {
            res.status(200).json(sports);
        }
    }
    catch (error) {
        console.error("Error retrieving sports:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getListSports = getListSports;
