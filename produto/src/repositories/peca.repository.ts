import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MydbDataSource} from '../datasources';
import {Peca, PecaRelations} from '../models';

export class PecaRepository extends DefaultCrudRepository<
  Peca,
  typeof Peca.prototype.nInterno,
  PecaRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Peca, dataSource);
  }
}
