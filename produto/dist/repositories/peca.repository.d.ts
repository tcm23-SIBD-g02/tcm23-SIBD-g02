import { DefaultCrudRepository } from '@loopback/repository';
import { MydbDataSource } from '../datasources';
import { Peca, PecaRelations } from '../models';
export declare class PecaRepository extends DefaultCrudRepository<Peca, typeof Peca.prototype.nInterno, PecaRelations> {
    constructor(dataSource: MydbDataSource);
}
