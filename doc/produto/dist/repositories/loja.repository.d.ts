import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm23Sibdg02DataSource } from '../datasources';
import { Loja, LojaRelations } from '../models';
export declare class LojaRepository extends DefaultCrudRepository<Loja, typeof Loja.prototype.idLoja, LojaRelations> {
    constructor(dataSource: Tcm23Sibdg02DataSource);
}
