"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PecaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PecaController = class PecaController {
    constructor(pecaRepository) {
        this.pecaRepository = pecaRepository;
    }
    async create(peca) {
        return this.pecaRepository.create(peca);
    }
    async count(where) {
        return this.pecaRepository.count(where);
    }
    async find(filter) {
        return this.pecaRepository.find(filter);
    }
    async updateAll(peca, where) {
        return this.pecaRepository.updateAll(peca, where);
    }
    async findById(id, filter) {
        return this.pecaRepository.findById(id, filter);
    }
    async updateById(id, peca) {
        await this.pecaRepository.updateById(id, peca);
    }
    async replaceById(id, peca) {
        await this.pecaRepository.replaceById(id, peca);
    }
    async deleteById(id) {
        await this.pecaRepository.deleteById(id);
    }
};
exports.PecaController = PecaController;
tslib_1.__decorate([
    (0, rest_1.post)('/pecas'),
    (0, rest_1.response)(200, {
        description: 'Peca model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Peca) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Peca, {
                    title: 'NewPeca',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pecas/count'),
    (0, rest_1.response)(200, {
        description: 'Peca model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Peca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pecas'),
    (0, rest_1.response)(200, {
        description: 'Array of Peca model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Peca, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Peca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pecas'),
    (0, rest_1.response)(200, {
        description: 'Peca PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Peca, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Peca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Peca, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pecas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Peca model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Peca, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Peca, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pecas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Peca PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Peca, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Peca]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/pecas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Peca PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Peca]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pecas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Peca DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PecaController.prototype, "deleteById", null);
exports.PecaController = PecaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PecaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PecaRepository])
], PecaController);
//# sourceMappingURL=peca.controller.js.map