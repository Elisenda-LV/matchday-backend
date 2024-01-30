import express, { Application, Response, Request } from "express";
import cors from 'cors';
import db from './config/db';



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