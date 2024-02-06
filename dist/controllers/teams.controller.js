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
exports.updateTeam = exports.postTeam = exports.deleteTeam = exports.getTeamsById = exports.getListTeams = void 0;
const teams_players_model_1 = __importDefault(require("../models/teams-players.model"));
const express_validator_1 = require("express-validator");
//CRUD TEAMS
//Show Teams list:
const getListTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield teams_players_model_1.default.findAll();
        if (teams.length === 0) {
            res.status(404).json({ message: "No teams found" });
        }
        else {
            res.status(200).json(teams);
        }
    }
    catch (error) {
        console.error("Error retrieving teams:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getListTeams = getListTeams;
//Show Teams by Id:
const getTeamsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const team = yield teams_players_model_1.default.findByPk(id);
        if (team) {
            res.status(200).json(team);
        }
        else {
            res.status(404).json({
                msg: `There is no team with that id ${id}`
            });
        }
    }
    catch (error) {
        console.error("Error retrieving id team:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getTeamsById = getTeamsById;
//Delete Team:
const deleteTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const errors = (0, express_validator_1.validationResult)(req);
        //If there are validation errors, respond with a 400 Bad Request status.
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            const team = yield teams_players_model_1.default.findByPk(id);
            yield team.destroy();
            res.json({
                msg: 'Team deleted'
            });
        }
    }
    catch (error) {
        console.error('Error retrieving id league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.deleteTeam = deleteTeam;
//Post Team:
const postTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            const { body } = req;
            yield teams_players_model_1.default.create(body);
            res.json({
                msg: 'Team added',
                data: body,
            });
        }
    }
    catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.postTeam = postTeam;
//Update Team:
const updateTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const team = yield teams_players_model_1.default.findByPk(id);
        if (team) {
            yield team.update(body);
            res.json({
                msg: 'Team updated!'
            });
        }
        else {
            res.status(404).json({
                msg: `There is no team with that id ${id}`
            });
        }
    }
    catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.updateTeam = updateTeam;
