import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23SibdG02DataSource} from '../datasources';
import {Pagamento, PagamentoRelations} from '../models';

export class PagamentoRepository extends DefaultCrudRepository<
  Pagamento,
  typeof Pagamento.prototype.nCliente,
  PagamentoRelations
> {
  constructor(
    @inject('datasources.Tcm23SibdG02') dataSource: Tcm23SibdG02DataSource,
  ) {
    super(Pagamento, dataSource);
  }
}
