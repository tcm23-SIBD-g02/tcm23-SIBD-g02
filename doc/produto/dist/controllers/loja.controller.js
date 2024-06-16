"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LojaController = class LojaController {
    constructor(lojaRepository) {
        this.lojaRepository = lojaRepository;
    }
    async create(loja) {
        return this.lojaRepository.create(loja);
    }
    async count(where) {
        return this.lojaRepository.count(where);
    }
    async find(filter) {
        return this.lojaRepository.find(filter);
    }
    async updateAll(loja, where) {
        return this.lojaRepository.updateAll(loja, where);
    }
    async findById(id, filter) {
        return this.lojaRepository.findById(id, filter);
    }
    async updateById(id, loja) {
        await this.lojaRepository.updateById(id, loja);
    }
    async replaceById(id, loja) {
        await this.lojaRepository.replaceById(id, loja);
    }
    async deleteById(id) {
        await this.lojaRepository.deleteById(id);
    }
};
exports.LojaController = LojaController;
tslib_1.__decorate([
    (0, rest_1.post)('/lojas'),
    (0, rest_1.response)(200, {
        description: 'Loja model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Loja) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Loja, {
                    title: 'NewLoja',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/lojas/count'),
    (0, rest_1.response)(200, {
        description: 'Loja model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Loja)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/lojas'),
    (0, rest_1.response)(200, {
        description: 'Array of Loja model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Loja, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Loja)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/lojas'),
    (0, rest_1.response)(200, {
        description: 'Loja PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Loja, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Loja)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Loja, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/lojas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Loja model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Loja, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Loja, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/lojas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Loja PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Loja, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Loja]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/lojas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Loja PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Loja]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/lojas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Loja DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaController.prototype, "deleteById", null);
exports.LojaController = LojaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LojaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LojaRepository])
], LojaController);
//# sourceMappingURL=loja.controller.js.map