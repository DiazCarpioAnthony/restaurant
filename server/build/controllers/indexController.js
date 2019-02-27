"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    list(req, res) {
        //pool.query('DESCRIBE fraseDia');
        res.json({ text: 'Listando' });
    }
    getOne(req, res) {
        //pool.query('DESCRIBE fraseDia');
        res.json({ text: 'Este es la frase ' + req.params.id });
    }
    create(req, res) {
        //pool.query('DESCRIBE fraseDia');
        res.json({ text: 'creating' });
    }
    update(req, res) {
        //pool.query('DESCRIBE fraseDia');
        res.json({ text: 'Updating a game ' + req.params.id });
    }
    delete(req, res) {
        //pool.query('DESCRIBE fraseDia');
        res.json({ text: 'Deleting a game ' + req.params.id });
    }
}
const indexController = new IndexController();
exports.default = indexController;
