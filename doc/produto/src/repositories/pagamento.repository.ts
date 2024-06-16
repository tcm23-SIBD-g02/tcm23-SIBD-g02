import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23Sibdg02DataSource} from '../datasources';
import {Pagamento, PagamentoRelations} from '../models';

export class PagamentoRepository extends DefaultCrudRepository<
  Pagamento,
  typeof Pagamento.prototype.nCliente,
  PagamentoRelations
> {
  constructor(
    @inject('datasources.tcm23sibdg02') dataSource: Tcm23Sibdg02DataSource,
  ) {
    super(Pagamento, dataSource);
  }
}
