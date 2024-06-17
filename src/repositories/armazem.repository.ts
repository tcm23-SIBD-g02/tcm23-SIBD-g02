import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MydbDataSource} from '../datasources';
import {Armazem, ArmazemRelations} from '../models';

export class ArmazemRepository extends DefaultCrudRepository<
  Armazem,
  typeof Armazem.prototype.ArmID,
  ArmazemRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Armazem, dataSource);
  }
}
