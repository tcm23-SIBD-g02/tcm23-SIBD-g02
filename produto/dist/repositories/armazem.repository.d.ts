import { DefaultCrudRepository } from '@loopback/repository';
import { MydbDataSource } from '../datasources';
import { Armazem, ArmazemRelations } from '../models';
export declare class ArmazemRepository extends DefaultCrudRepository<Armazem, typeof Armazem.prototype.ArmID, ArmazemRelations> {
    constructor(dataSource: MydbDataSource);
}
