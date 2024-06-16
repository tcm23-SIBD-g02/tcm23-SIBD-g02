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
  Loja,
  Peca,
} from '../models';
import {LojaRepository} from '../repositories';

export class LojaPecaController {
  constructor(
    @repository(LojaRepository) protected lojaRepository: LojaRepository,
  ) { }

  @get('/lojas/{id}/pecas', {
    responses: {
      '200': {
        description: 'Array of Loja has many Peca',
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
    return this.lojaRepository.vende(id).find(filter);
  }

  @post('/lojas/{id}/pecas', {
    responses: {
      '200': {
        description: 'Loja model instance',
        content: {'application/json': {schema: getModelSchemaRef(Peca)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Loja.prototype.idLoja,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peca, {
            title: 'NewPecaInLoja',
            exclude: ['nInterno'],
            optional: ['lojaId']
          }),
        },
      },
    }) peca: Omit<Peca, 'nInterno'>,
  ): Promise<Peca> {
    return this.lojaRepository.vende(id).create(peca);
  }

  @patch('/lojas/{id}/pecas', {
    responses: {
      '200': {
        description: 'Loja.Peca PATCH success count',
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
    return this.lojaRepository.vende(id).patch(peca, where);
  }

  @del('/lojas/{id}/pecas', {
    responses: {
      '200': {
        description: 'Loja.Peca DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Peca)) where?: Where<Peca>,
  ): Promise<Count> {
    return this.lojaRepository.vende(id).delete(where);
  }
}
