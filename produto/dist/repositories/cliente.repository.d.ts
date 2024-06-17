import { DefaultCrudRepository } from '@loopback/repository';
import { MydbDataSource } from '../datasources';
import { Cliente, ClienteRelations } from '../models';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.nCliente, ClienteRelations> {
    constructor(dataSource: MydbDataSource);
}
