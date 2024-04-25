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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListTeamPlayers = void 0;
const teams_players_model_1 = require("../models/teams-players.model");
//Show teams_players list:
const getListTeamPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tp = yield teams_players_model_1.TeamPlayer.findAll();
        if (tp.length === 0) {
            res.status(404).json({ message: "No team_player found" });
        }
        else {
            res.status(200).json(tp);
        }
    }
    catch (error) {
        console.error("Error retrieving team_player:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getListTeamPlayers = getListTeamPlayers;
