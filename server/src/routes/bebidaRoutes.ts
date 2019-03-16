import { Router } from 'express';
import bebidaController from '../controllers/bebidaController';

class BebidaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', bebidaController.list);
        this.router.get('/:idBebida', bebidaController.getOne);
        this.router.post('/', bebidaController.create);
        this.router.put('/:idBebida', bebidaController.update);
        this.router.delete('/:idBebida', bebidaController.delete);
    }

}

const bebidaRoutes = new BebidaRoutes();
export default bebidaRoutes.router; 