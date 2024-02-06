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
exports.updatePlayer = exports.postPlayer = exports.deletePlayer = exports.getPlayerById = exports.getListPlayers = void 0;
const teams_players_model_1 = __importDefault(require("../models/teams-players.model"));
const express_validator_1 = require("express-validator");
//Show Players list:
const getListPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const players = yield teams_players_model_1.default.findAll();
        if (players.length === 0) {
            res.status(404).json({ message: "No players found" });
        }
        else {
            res.status(200).json(players);
        }
    }
    catch (error) {
        console.error("Error retrieving players:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getListPlayers = getListPlayers;
//Show Player by Id:
const getPlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const player = yield teams_players_model_1.default.findByPk(id);
        if (player) {
            res.status(200).json(player);
        }
        else {
            res.status(404).json({
                msg: `There is no player with that id ${id}`
            });
        }
    }
    catch (error) {
        console.error("Error retrieving id league:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getPlayerById = getPlayerById;
//Delete player:
const deletePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const errors = (0, express_validator_1.validationResult)(req);
        //If there are validation errors, respond with a 400 Bad Request status.
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            const player = yield teams_players_model_1.default.findByPk(id);
            yield player.destroy();
            res.json({
                msg: 'Player deleted'
            });
        }
    }
    catch (error) {
        console.error('Error retrieving id league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.deletePlayer = deletePlayer;
//Add a new player:
const postPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            const { body } = req;
            yield teams_players_model_1.default.create(body);
            res.json({
                msg: 'Player added',
                data: body,
            });
        }
    }
    catch (error) {
        console.error('Error retrieving post league:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.postPlayer = postPlayer;
//Update league:
const updatePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const player = yield teams_players_model_1.default.findByPk(id);
        if (player) {
            yield player.update(body);
            res.json({
                msg: 'Player updated!'
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
exports.updatePlayer = updatePlayer;
