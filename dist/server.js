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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const leagues_routes_1 = __importDefault(require("./routes/leagues.routes"));
const teams_routes_1 = __importDefault(require("./routes/teams.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running on port ${this.port}`);
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.get('/', (req, resp) => {
            resp.json({
                msg: 'API working!'
            });
        });
        //API routes
        this.app.use('/leagues', leagues_routes_1.default);
        this.app.use('/auth', auth_routes_1.default);
        this.app.use('/users', users_routes_1.default);
        this.app.use('/teams', teams_routes_1.default);
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.authenticate();
                console.log('DB connected 🚀 🚀 🚀');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Server;
