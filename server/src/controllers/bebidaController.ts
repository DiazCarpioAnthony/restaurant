import { Request, Response } from 'express';

import pool from '../database';

class BebidaController{
    
    public async list(req:Request , res:Response ): Promise<void>{
        const bebidas = await pool.query('SELECT * FROM bebida');
        res.json(bebidas);
    }
    public async getOne(req:Request , res:Response ): Promise<void>{
        const { idBebida } = req.params;
        const bebidaFound = await pool.query('SELECT * FROM bebida WHERE idBebida = ?', [idBebida]);
        if(bebidaFound.length > 0){
            res.json(bebidaFound);
        }else{
            res.status(404).json({text: "No hay bebidas"});
        }
        
    }
    public async create(req:Request , res:Response ): Promise<void>{
        await pool.query('INSERT INTO bebida set ?', [req.body]);
        res.json({text: 'creating bebida'});
    }
    public async update(req:Request , res:Response ): Promise<void>{
        const { idBebida } = req.params;
        await pool.query('UPDATE bebida set ? WHERE idBebida = ?', [req.body,idBebida]);
        res.json({text: 'Updating bebida ' + req.params.id});
    }
    public async delete(req:Request , res:Response ): Promise<void>{
        const { idBebida } = req.params;
        await pool.query('DELETE FROM bebida WHERE idBebida = ?', [idBebida]);
        res.json({text: 'Deleting bebida ' + req.params.id});
    }

}

const bebidaController = new BebidaController();
export default bebidaController;