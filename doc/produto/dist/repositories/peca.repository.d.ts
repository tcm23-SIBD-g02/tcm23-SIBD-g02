import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm23Sibdg02DataSource } from '../datasources';
import { Peca, PecaRelations } from '../models';
export declare class PecaRepository extends DefaultCrudRepository<Peca, typeof Peca.prototype.nInterno, PecaRelations> {
    constructor(dataSource: Tcm23Sibdg02DataSource);
}
