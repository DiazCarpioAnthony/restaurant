"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bebidaController_1 = __importDefault(require("../controllers/bebidaController"));
class BebidaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', bebidaController_1.default.list);
        this.router.get('/:idBebida', bebidaController_1.default.getOne);
        this.router.post('/', bebidaController_1.default.create);
        this.router.put('/:idBebida', bebidaController_1.default.update);
        this.router.delete('/:idBebida', bebidaController_1.default.delete);
    }
}
const bebidaRoutes = new BebidaRoutes();
exports.default = bebidaRoutes.router;
