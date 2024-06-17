"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Loja = class Loja extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Loja = Loja;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Loja.prototype, "idLoja", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Loja.prototype, "moradaLoja", void 0);
exports.Loja = Loja = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Loja);
//# sourceMappingURL=loja.model.js.map