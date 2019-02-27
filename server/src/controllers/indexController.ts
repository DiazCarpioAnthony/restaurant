import { Request, Response } from 'express';

import pool from '../database';

class IndexController{
    
    public async list(req:Request , res:Response ): Promise<void>{
        const frasesDias = await pool.query('SELECT * FROM fraseDia');
        res.json(frasesDias);
    }
    public async getOne(req:Request , res:Response ): Promise<void>{
        const { idFrase } = req.params;
        const fraseHoy = await pool.query('SELECT * FROM fraseDia WHERE idFrase = ?', [idFrase]);
        if(fraseHoy.length > 0){
            res.json(fraseHoy);
        }
        res.status(404).json({text: "No hay frases"});
    }
    public async create(req:Request , res:Response ): Promise<void>{
        await pool.query('INSERT INTO fraseDia set ?', [req.body]);
        res.json({text: 'creating frase'});
    }
    public async update(req:Request , res:Response ): Promise<void>{
        const { idFrase } = req.params;
        await pool.query('UPDATE fraseDia set ? WHERE idFrase = ?', [req.body,idFrase]);
        res.json({text: 'Updating frase ' + req.params.id});
    }
    public async delete(req:Request , res:Response ): Promise<void>{
        const { idFrase } = req.params;
        await pool.query('DELETE FROM fraseDiaWHERE idFrase = ?', [idFrase]);
        res.json({text: 'Deleting frase ' + req.params.id});
    }

}

const indexController = new IndexController();
export default indexController;