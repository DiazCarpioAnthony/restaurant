import { Router } from 'express';
import platoController from '../controllers/platoController';

class PlatoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', platoController.list);
        this.router.get('/:idPlato', platoController.getOne);
        this.router.post('/', platoController.create);
        this.router.put('/:idPlato', platoController.update);
        this.router.delete('/:idPlato', platoController.delete);
    }

}

const platoRoutes = new PlatoRoutes();
export default platoRoutes.router; 