import { DefaultCrudRepository } from '@loopback/repository';
import { Tcm23Sibdg02DataSource } from '../datasources';
import { Armazem, ArmazemRelations } from '../models';
export declare class ArmazemRepository extends DefaultCrudRepository<Armazem, typeof Armazem.prototype.armID, ArmazemRelations> {
    constructor(dataSource: Tcm23Sibdg02DataSource);
}
