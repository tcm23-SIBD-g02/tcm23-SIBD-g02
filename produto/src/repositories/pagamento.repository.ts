import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MydbDataSource} from '../datasources';
import {Pagamento, PagamentoRelations} from '../models';

export class PagamentoRepository extends DefaultCrudRepository<
  Pagamento,
  typeof Pagamento.prototype.nCliente,
  PagamentoRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Pagamento, dataSource);
  }
}
