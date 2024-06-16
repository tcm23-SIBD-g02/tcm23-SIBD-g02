import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Armazem,
  Peca,
} from '../models';
import {ArmazemRepository} from '../repositories';

export class ArmazemPecaController {
  constructor(
    @repository(ArmazemRepository) protected armazemRepository: ArmazemRepository,
  ) { }

  @get('/armazems/{id}/pecas', {
    responses: {
      '200': {
        description: 'Array of Armazem has many Peca',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Peca)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Peca>,
  ): Promise<Peca[]> {
    return this.armazemRepository.armazena(id).find(filter);
  }

  @post('/armazems/{id}/pecas', {
    responses: {
      '200': {
        description: 'Armazem model instance',
        content: {'application/json': {schema: getModelSchemaRef(Peca)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Armazem.prototype.armID,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peca, {
            title: 'NewPecaInArmazem',
            exclude: ['nInterno'],
            optional: ['armazemId']
          }),
        },
      },
    }) peca: Omit<Peca, 'nInterno'>,
  ): Promise<Peca> {
    return this.armazemRepository.armazena(id).create(peca);
  }

  @patch('/armazems/{id}/pecas', {
    responses: {
      '200': {
        description: 'Armazem.Peca PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peca, {partial: true}),
        },
      },
    })
    peca: Partial<Peca>,
    @param.query.object('where', getWhereSchemaFor(Peca)) where?: Where<Peca>,
  ): Promise<Count> {
    return this.armazemRepository.armazena(id).patch(peca, where);
  }

  @del('/armazems/{id}/pecas', {
    responses: {
      '200': {
        description: 'Armazem.Peca DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Peca)) where?: Where<Peca>,
  ): Promise<Count> {
    return this.armazemRepository.armazena(id).delete(where);
  }
}
