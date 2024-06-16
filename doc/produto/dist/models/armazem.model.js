"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armazem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const peca_model_1 = require("./peca.model");
const encomenda_model_1 = require("./encomenda.model");
let Armazem = class Armazem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Armazem = Armazem;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Armazem.prototype, "moradaArm", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Armazem.prototype, "armID", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => peca_model_1.Peca),
    tslib_1.__metadata("design:type", Array)
], Armazem.prototype, "armazena", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => encomenda_model_1.Encomenda),
    tslib_1.__metadata("design:type", Array)
], Armazem.prototype, "prepara", void 0);
exports.Armazem = Armazem = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Armazem);
//# sourceMappingURL=armazem.model.js.map