import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MydbDataSource} from '../datasources';
import {Encomenda, EncomendaRelations} from '../models';

export class EncomendaRepository extends DefaultCrudRepository<
  Encomenda,
  typeof Encomenda.prototype.numEnc,
  EncomendaRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Encomenda, dataSource);
  }
}
