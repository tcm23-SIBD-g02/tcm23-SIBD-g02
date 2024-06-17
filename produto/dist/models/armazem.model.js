"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armazem = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Armazem = class Armazem extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Armazem = Armazem;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Armazem.prototype, "ArmID", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Armazem.prototype, "rua", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Armazem.prototype, "numeroPorta", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Armazem.prototype, "codPostal", void 0);
exports.Armazem = Armazem = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Armazem);
//# sourceMappingURL=armazem.model.js.map