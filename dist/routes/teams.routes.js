"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teams_controller_1 = require("../controllers/teams.controller");
const routerTeam = (0, express_1.Router)();
routerTeam.get('/', teams_controller_1.getListTeams);
exports.default = routerTeam;
