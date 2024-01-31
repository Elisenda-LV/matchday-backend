"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teams_players_controller_1 = require("../controllers/teams-players.controller");
const routerTP = (0, express_1.Router)();
routerTP.get('/', teams_players_controller_1.getListTeamPlayers);
exports.default = routerTP;
