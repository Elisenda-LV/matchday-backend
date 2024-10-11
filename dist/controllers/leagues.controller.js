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
exports.updateLeague = exports.postLeague = exports.deleteLeague = exports.getLeagueById = exports.getListLeagues = void 0;
const leagues_models_1 = __importDefault(require("../models/leagues.models"));
const express_validator_1 = require("express-validator");
//CRUD LEAGUES
//Show Leagues list :
const getListLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagues = yield leagues_models_1.default.findAll();
        if (leagues.length === 0) {
            res.status(404).json({ message: "No leagues found" });
        }
        else {
            res.status(200).json(leagues);
        }
    }
    catch (error) {
        console.error("Error retrieving leagues:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getListLeagues = getListLeagues;
//Show League by Id:
const getLeagueById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const league = yield leagues_models_1.default.findByPk(id);
        if (league) {
            res.status(200).json(league);
        }
        else {
            res.status(404).json({
                msg: `There is no league with that id ${id}`
            });
        }
    }
    catch (error) {
        console.error("Error retrieving id league:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getLeagueById = getLeagueById;
//Delete league:
const deleteLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const errors = (0, express_validator_1.validationResult)(req);
        //If there are validation errors, respond with a 400 Bad Request status.
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            const league = yield leagues_models_1.default.findByPk(id);
            yield league.destroy();
            res.json({
                msg: 'League deleted'
            });
        }
    }
    catch (error) {
        console.error('Error retrieving id league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.deleteLeague = deleteLeague;
//Add a new league:
const postLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            const { body } = req;
            yield leagues_models_1.default.create(body);
            res.json({
                msg: 'League added',
                data: body,
            });
        }
    }
    catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.postLeague = postLeague;
//Update league:
const updateLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const league = yield leagues_models_1.default.findByPk(id);
        if (league) {
            yield league.update(body);
            res.json({
                msg: 'League updated!'
            });
        }
        else {
            res.status(404).json({
                msg: `There is no league with that id ${id}`
            });
        }
    }
    catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.updateLeague = updateLeague;
//Show league teams:
