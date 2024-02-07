import express, { Application, Response, Request } from "express";
import cors from 'cors';
import db from './config/db';

import routerLeague from "./routes/leagues.routes";
import routerPlayer from "./routes/players.routes";
import routerSport from "./routes/sports.routes";
import routerTeam from "./routes/teams.routes";
import routerTP from "./routes/team-player.routes";
import routerAuth from "./routes/auth.routes";
import routerUsers from "./routes/users.routes";



class Server {

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect()

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App running on port ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.get('/', (req: Request, resp: Response) => {
            resp.json({
                msg: 'API working!'
            })
        })

        //API routes
        this.app.use('/leagues', routerLeague);
        this.app.use('/auth', routerAuth);
        this.app.use('/users', routerUsers);
        this.app.use('/players', routerPlayer);
        this.app.use('/sports', routerSport);
        this.app.use('/teams', routerTeam);
        this.app.use('/tp', routerTP);



    }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log('DB connected')

        } catch (error){
            console.log(error);
        }
    }

}


export default Server;