"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controllers_1 = require("../controllers/players.controllers");
const routerPlayer = (0, express_1.Router)();
routerPlayer.get('/', players_controllers_1.getListPlayers);
exports.default = routerPlayer;
