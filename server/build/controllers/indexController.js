"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const frasesDias = yield database_1.default.query('SELECT * FROM fraseDia');
            res.json(frasesDias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFrase } = req.params;
            const fraseHoy = yield database_1.default.query('SELECT * FROM fraseDia WHERE idFrase = ?', [idFrase]);
            if (fraseHoy.length > 0) {
                res.json(fraseHoy);
            }
            res.status(404).json({ text: "No hay frases" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO fraseDia set ?', [req.body]);
            res.json({ text: 'creating frase' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFrase } = req.params;
            yield database_1.default.query('UPDATE fraseDia set ? WHERE idFrase = ?', [req.body, idFrase]);
            res.json({ text: 'Updating frase ' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFrase } = req.params;
            yield database_1.default.query('DELETE FROM fraseDiaWHERE idFrase = ?', [idFrase]);
            res.json({ text: 'Deleting frase ' + req.params.id });
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
