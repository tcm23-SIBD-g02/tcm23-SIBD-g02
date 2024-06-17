import { DefaultCrudRepository } from '@loopback/repository';
import { MydbDataSource } from '../datasources';
import { Loja, LojaRelations } from '../models';
export declare class LojaRepository extends DefaultCrudRepository<Loja, typeof Loja.prototype.idLoja, LojaRelations> {
    constructor(dataSource: MydbDataSource);
}
