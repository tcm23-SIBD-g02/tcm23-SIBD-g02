"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peca = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Peca = class Peca extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Peca = Peca;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Peca.prototype, "nInterno", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Peca.prototype, "zona", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Peca.prototype, "nSerie", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Peca.prototype, "valorCompra", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Peca.prototype, "valorVenda", void 0);
exports.Peca = Peca = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Peca);
//# sourceMappingURL=peca.model.js.map