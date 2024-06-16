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
  Encomenda,
} from '../models';
import {ArmazemRepository} from '../repositories';

export class ArmazemEncomendaController {
  constructor(
    @repository(ArmazemRepository) protected armazemRepository: ArmazemRepository,
  ) { }

  @get('/armazems/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Array of Armazem has many Encomenda',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Encomenda)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Encomenda>,
  ): Promise<Encomenda[]> {
    return this.armazemRepository.prepara(id).find(filter);
  }

  @post('/armazems/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Armazem model instance',
        content: {'application/json': {schema: getModelSchemaRef(Encomenda)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Armazem.prototype.armID,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomenda, {
            title: 'NewEncomendaInArmazem',
            exclude: ['numEnc'],
            optional: ['armazemId']
          }),
        },
      },
    }) encomenda: Omit<Encomenda, 'numEnc'>,
  ): Promise<Encomenda> {
    return this.armazemRepository.prepara(id).create(encomenda);
  }

  @patch('/armazems/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Armazem.Encomenda PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomenda, {partial: true}),
        },
      },
    })
    encomenda: Partial<Encomenda>,
    @param.query.object('where', getWhereSchemaFor(Encomenda)) where?: Where<Encomenda>,
  ): Promise<Count> {
    return this.armazemRepository.prepara(id).patch(encomenda, where);
  }

  @del('/armazems/{id}/encomendas', {
    responses: {
      '200': {
        description: 'Armazem.Encomenda DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Encomenda)) where?: Where<Encomenda>,
  ): Promise<Count> {
    return this.armazemRepository.prepara(id).delete(where);
  }
}
