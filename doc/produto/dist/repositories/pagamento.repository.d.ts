import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm23Sibdg02DataSource } from '../datasources';
import { Pagamento, PagamentoRelations } from '../models';
export declare class PagamentoRepository extends DefaultCrudRepository<Pagamento, typeof Pagamento.prototype.nCliente, PagamentoRelations> {
    constructor(dataSource: Tcm23Sibdg02DataSource);
}
