import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Loja,
  Encomenda,
} from '../models';
import {LojaRepository} from '../repositories';

export class LojaEncomendaController {
  constructor(
    @repository(LojaRepository)
    public lojaRepository: LojaRepository,
  ) { }

  @get('/lojas/{id}/encomenda', {
    responses: {
      '200': {
        description: 'Encomenda belonging to Loja',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Encomenda),
          },
        },
      },
    },
  })
  async getEncomenda(
    @param.path.number('id') id: typeof Loja.prototype.idLoja,
  ): Promise<Encomenda> {
    return this.lojaRepository.realiza(id);
  }
}
