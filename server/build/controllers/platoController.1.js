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
class PlatoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const platos = yield database_1.default.query('SELECT * FROM plato');
            res.json(platos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPlato } = req.params;
            const platoFound = yield database_1.default.query('SELECT * FROM plato WHERE idPlato = ?', [idPlato]);
            if (platoFound.length > 0) {
                res.json(platoFound);
            }
            else {
                res.status(404).json({ text: "No hay platos" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO plato set ?', [req.body]);
            res.json({ text: 'creating plato' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPlato } = req.params;
            yield database_1.default.query('UPDATE plato set ? WHERE idPlato = ?', [req.body, idPlato]);
            res.json({ text: 'Updating plato ' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPlato } = req.params;
            yield database_1.default.query('DELETE FROM plato WHERE idPlato = ?', [idPlato]);
            res.json({ text: 'Deleting frase ' + req.params.id });
        });
    }
}
const platoController = new PlatoController();
exports.default = platoController;
