import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Peca} from '../models';
import {PecaRepository} from '../repositories';

export class PecaController {
  constructor(
    @repository(PecaRepository)
    public pecaRepository : PecaRepository,
  ) {}

  @post('/pecas')
  @response(200, {
    description: 'Peca model instance',
    content: {'application/json': {schema: getModelSchemaRef(Peca)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peca, {
            title: 'NewPeca',
            exclude: ['id'],
          }),
        },
      },
    })
    peca: Omit<Peca, 'id'>,
  ): Promise<Peca> {
    return this.pecaRepository.create(peca);
  }

  @get('/pecas/count')
  @response(200, {
    description: 'Peca model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Peca) where?: Where<Peca>,
  ): Promise<Count> {
    return this.pecaRepository.count(where);
  }

  @get('/pecas')
  @response(200, {
    description: 'Array of Peca model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Peca, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Peca) filter?: Filter<Peca>,
  ): Promise<Peca[]> {
    return this.pecaRepository.find(filter);
  }

  @patch('/pecas')
  @response(200, {
    description: 'Peca PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peca, {partial: true}),
        },
      },
    })
    peca: Peca,
    @param.where(Peca) where?: Where<Peca>,
  ): Promise<Count> {
    return this.pecaRepository.updateAll(peca, where);
  }

  @get('/pecas/{id}')
  @response(200, {
    description: 'Peca model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Peca, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Peca, {exclude: 'where'}) filter?: FilterExcludingWhere<Peca>
  ): Promise<Peca> {
    return this.pecaRepository.findById(id, filter);
  }

  @patch('/pecas/{id}')
  @response(204, {
    description: 'Peca PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peca, {partial: true}),
        },
      },
    })
    peca: Peca,
  ): Promise<void> {
    await this.pecaRepository.updateById(id, peca);
  }

  @put('/pecas/{id}')
  @response(204, {
    description: 'Peca PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() peca: Peca,
  ): Promise<void> {
    await this.pecaRepository.replaceById(id, peca);
  }

  @del('/pecas/{id}')
  @response(204, {
    description: 'Peca DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pecaRepository.deleteById(id);
  }
}
