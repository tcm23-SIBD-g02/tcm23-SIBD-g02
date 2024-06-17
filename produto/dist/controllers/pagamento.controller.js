"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PagamentoController = class PagamentoController {
    constructor(pagamentoRepository) {
        this.pagamentoRepository = pagamentoRepository;
    }
    async create(pagamento) {
        return this.pagamentoRepository.create(pagamento);
    }
    async count(where) {
        return this.pagamentoRepository.count(where);
    }
    async find(filter) {
        return this.pagamentoRepository.find(filter);
    }
    async updateAll(pagamento, where) {
        return this.pagamentoRepository.updateAll(pagamento, where);
    }
    async findById(id, filter) {
        return this.pagamentoRepository.findById(id, filter);
    }
    async updateById(id, pagamento) {
        await this.pagamentoRepository.updateById(id, pagamento);
    }
    async replaceById(id, pagamento) {
        await this.pagamentoRepository.replaceById(id, pagamento);
    }
    async deleteById(id) {
        await this.pagamentoRepository.deleteById(id);
    }
};
exports.PagamentoController = PagamentoController;
tslib_1.__decorate([
    (0, rest_1.post)('/pagamentos'),
    (0, rest_1.response)(200, {
        description: 'Pagamento model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pagamento) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pagamento, {
                    title: 'NewPagamento',
                    exclude: ['nCliente'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pagamentos/count'),
    (0, rest_1.response)(200, {
        description: 'Pagamento model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Pagamento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pagamentos'),
    (0, rest_1.response)(200, {
        description: 'Array of Pagamento model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pagamento, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Pagamento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pagamentos'),
    (0, rest_1.response)(200, {
        description: 'Pagamento PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pagamento, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Pagamento)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pagamento, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pagamentos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pagamento model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pagamento, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Pagamento, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pagamentos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pagamento PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pagamento, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Pagamento]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/pagamentos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pagamento PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Pagamento]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pagamentos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pagamento DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PagamentoController.prototype, "deleteById", null);
exports.PagamentoController = PagamentoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PagamentoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PagamentoRepository])
], PagamentoController);
//# sourceMappingURL=pagamento.controller.js.map