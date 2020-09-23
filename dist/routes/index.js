"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarios_routes_1 = __importDefault(require("./usuarios.routes"));
var agendamentos_routes_1 = __importDefault(require("./agendamentos.routes"));
var sessions_routes_1 = __importDefault(require("./sessions.routes"));
var routes = express_1.Router();
routes.use('/usuarios', usuarios_routes_1.default);
routes.use('/agendamentos', agendamentos_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
