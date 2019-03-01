import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

class Server {
    
    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        //MORGAN PERMITE VER LAS PETICIONES QUE SE REALIZAN EN LA CONSOLA DESPUES QUE SE REALIZAN
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes():void {
        //LLAMA A LAS RUTAS DEL INDEXROUTES QUE SUS DIRECC CORREN A PARTIR DE ESTA DIRECCION
        this.app.use('/api/frase',indexRoutes);
    }

    start():void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server on port`, this.app.get('port'));
        });
    }

}
const server = new Server();