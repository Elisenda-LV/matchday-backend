"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leagues_controller_1 = require("../controllers/leagues.controller");
const routerLeague = (0, express_1.Router)();
routerLeague.get('/', leagues_controller_1.getListLeagues);
exports.default = routerLeague;
