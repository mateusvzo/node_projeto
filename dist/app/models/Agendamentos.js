"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Usuarios_1 = __importDefault(require("./Usuarios"));
var Agendamentos = /** @class */ (function () {
    function Agendamentos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Agendamentos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agendamentos.prototype, "prestador_servico_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Usuarios_1.default; }),
        typeorm_1.JoinColumn({ name: 'prestador_servico_id' }) // joincolumn representa na tabela agendamentos qual o campo que vai se relacionar com o model usuario
        ,
        __metadata("design:type", Usuarios_1.default)
    ], Agendamentos.prototype, "prestador_servico", void 0);
    __decorate([
        typeorm_1.Column('time with time zone'),
        __metadata("design:type", Date)
    ], Agendamentos.prototype, "data", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Agendamentos.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Agendamentos.prototype, "updated_at", void 0);
    Agendamentos = __decorate([
        typeorm_1.Entity('agendamentos')
    ], Agendamentos);
    return Agendamentos;
}());
exports.default = Agendamentos;
