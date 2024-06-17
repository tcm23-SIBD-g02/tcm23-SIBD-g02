"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmazemController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArmazemController = class ArmazemController {
    constructor(armazemRepository) {
        this.armazemRepository = armazemRepository;
    }
    async create(armazem) {
        return this.armazemRepository.create(armazem);
    }
    async count(where) {
        return this.armazemRepository.count(where);
    }
    async find(filter) {
        return this.armazemRepository.find(filter);
    }
    async updateAll(armazem, where) {
        return this.armazemRepository.updateAll(armazem, where);
    }
    async findById(id, filter) {
        return this.armazemRepository.findById(id, filter);
    }
    async updateById(id, armazem) {
        await this.armazemRepository.updateById(id, armazem);
    }
    async replaceById(id, armazem) {
        await this.armazemRepository.replaceById(id, armazem);
    }
    async deleteById(id) {
        await this.armazemRepository.deleteById(id);
    }
};
exports.ArmazemController = ArmazemController;
tslib_1.__decorate([
    (0, rest_1.post)('/armazems'),
    (0, rest_1.response)(200, {
        description: 'Armazem model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Armazem) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Armazem, {
                    title: 'NewArmazem',
                    exclude: ['ArmID'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/armazems/count'),
    (0, rest_1.response)(200, {
        description: 'Armazem model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Armazem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/armazems'),
    (0, rest_1.response)(200, {
        description: 'Array of Armazem model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Armazem, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Armazem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/armazems'),
    (0, rest_1.response)(200, {
        description: 'Armazem PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Armazem, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Armazem)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Armazem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/armazems/{id}'),
    (0, rest_1.response)(200, {
        description: 'Armazem model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Armazem, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Armazem, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/armazems/{id}'),
    (0, rest_1.response)(204, {
        description: 'Armazem PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Armazem, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Armazem]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/armazems/{id}'),
    (0, rest_1.response)(204, {
        description: 'Armazem PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Armazem]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/armazems/{id}'),
    (0, rest_1.response)(204, {
        description: 'Armazem DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ArmazemController.prototype, "deleteById", null);
exports.ArmazemController = ArmazemController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ArmazemRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArmazemRepository])
], ArmazemController);
//# sourceMappingURL=armazem.controller.js.map