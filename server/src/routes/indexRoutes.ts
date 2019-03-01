import { Router } from 'express';
import indexController from '../controllers/indexController';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', indexController.list);
        this.router.get('/count', indexController.count);
        this.router.get('/:idFrase', indexController.getOne);
        this.router.post('/', indexController.create);
        this.router.put('/:idFrase', indexController.update);
        this.router.delete('/:idFrase', indexController.delete);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router; 