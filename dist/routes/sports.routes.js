"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sports_controller_1 = require("../controllers/sports.controller");
const routerSport = (0, express_1.Router)();
routerSport.get('/', sports_controller_1.getListSports);
exports.default = routerSport;
