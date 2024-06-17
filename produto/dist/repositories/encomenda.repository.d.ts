import { DefaultCrudRepository } from '@loopback/repository';
import { MydbDataSource } from '../datasources';
import { Encomenda, EncomendaRelations } from '../models';
export declare class EncomendaRepository extends DefaultCrudRepository<Encomenda, typeof Encomenda.prototype.numEnc, EncomendaRelations> {
    constructor(dataSource: MydbDataSource);
}
