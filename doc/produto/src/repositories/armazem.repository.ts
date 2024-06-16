import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23Sibdg02DataSource} from '../datasources';
import {Armazem, ArmazemRelations} from '../models';

export class ArmazemRepository extends DefaultCrudRepository<
  Armazem,
  typeof Armazem.prototype.armID,
  ArmazemRelations
> {
  constructor(
    @inject('datasources.tcm23sibdg02') dataSource: Tcm23Sibdg02DataSource,
  ) {
    super(Armazem, dataSource);
  }
}
