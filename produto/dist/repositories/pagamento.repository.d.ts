import { DefaultCrudRepository } from '@loopback/repository';
import { MydbDataSource } from '../datasources';
import { Pagamento, PagamentoRelations } from '../models';
export declare class PagamentoRepository extends DefaultCrudRepository<Pagamento, typeof Pagamento.prototype.nCliente, PagamentoRelations> {
    constructor(dataSource: MydbDataSource);
}
