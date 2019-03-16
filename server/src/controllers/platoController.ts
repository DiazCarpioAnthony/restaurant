import { Request, Response } from 'express';

import pool from '../database';

class PlatoController{
    
    public async list(req:Request , res:Response ): Promise<void>{
        const platos = await pool.query('SELECT * FROM plato');
        res.json(platos);
    }
    public async getOne(req:Request , res:Response ): Promise<void>{
        const { idPlato } = req.params;
        const platoFound = await pool.query('SELECT * FROM plato WHERE idPlato = ?', [idPlato]);
        if(platoFound.length > 0){
            res.json(platoFound);
        }else{
            res.status(404).json({text: "No hay platos"});
        }
        
    }
    public async create(req:Request , res:Response ): Promise<void>{
        await pool.query('INSERT INTO plato set ?', [req.body]);
        res.json({text: 'creating plato'});
    }
    public async update(req:Request , res:Response ): Promise<void>{
        const { idPlato } = req.params;
        await pool.query('UPDATE plato set ? WHERE idPlato = ?', [req.body,idPlato]);
        res.json({text: 'Updating plato ' + req.params.id});
    }
    public async delete(req:Request , res:Response ): Promise<void>{
        const { idPlato } = req.params;
        await pool.query('DELETE FROM plato WHERE idPlato = ?', [idPlato]);
        res.json({text: 'Deleting plato ' + req.params.id});
    }

}

const platoController = new PlatoController();
export default platoController;