import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23SibdG02DataSource} from '../datasources';
import {Armazem, ArmazemRelations} from '../models';

export class ArmazemRepository extends DefaultCrudRepository<
  Armazem,
  typeof Armazem.prototype.ArmId,
  ArmazemRelations
> {
  constructor(
    @inject('datasources.Tcm23SibdG02') dataSource: Tcm23SibdG02DataSource,
  ) {
    super(Armazem, dataSource);
  }
}
