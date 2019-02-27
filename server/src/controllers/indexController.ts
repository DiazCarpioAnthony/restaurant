import { Request, Response } from 'express';

import pool from '../database';

class IndexController{
    
    public list(req:Request , res:Response ){
        //pool.query('DESCRIBE fraseDia');
        res.json({text: 'Listando'});
    }
    public getOne(req:Request , res:Response ){
        //pool.query('DESCRIBE fraseDia');
        res.json({text: 'Este es la frase '+ req.params.id});
    }
    public create(req:Request , res:Response ){
        //pool.query('DESCRIBE fraseDia');
        res.json({text: 'creating'});
    }
    public update(req:Request , res:Response ){
        //pool.query('DESCRIBE fraseDia');
        res.json({text: 'Updating a game ' + req.params.id});
    }
    public delete(req:Request , res:Response ){
        //pool.query('DESCRIBE fraseDia');
        res.json({text: 'Deleting a game ' + req.params.id});
    }

}

const indexController = new IndexController();
export default indexController;