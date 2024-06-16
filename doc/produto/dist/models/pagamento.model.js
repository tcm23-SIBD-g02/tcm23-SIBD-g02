"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Pagamento = class Pagamento extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Pagamento = Pagamento;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pagamento.prototype, "nCliente", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pagamento.prototype, "tipoPagamento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pagamento.prototype, "detalhePagamento", void 0);
exports.Pagamento = Pagamento = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pagamento);
//# sourceMappingURL=pagamento.model.js.map