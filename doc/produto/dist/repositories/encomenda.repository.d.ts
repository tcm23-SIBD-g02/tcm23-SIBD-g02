import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm23Sibdg02DataSource } from '../datasources';
import { Encomenda, EncomendaRelations } from '../models';
export declare class EncomendaRepository extends DefaultCrudRepository<Encomenda, typeof Encomenda.prototype.numEnc, EncomendaRelations> {
    constructor(dataSource: Tcm23Sibdg02DataSource);
}
