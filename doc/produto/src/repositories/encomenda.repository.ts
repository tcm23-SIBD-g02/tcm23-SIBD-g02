import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23Sibdg02DataSource} from '../datasources';
import {Encomenda, EncomendaRelations} from '../models';

export class EncomendaRepository extends DefaultCrudRepository<
  Encomenda,
  typeof Encomenda.prototype.numEnc,
  EncomendaRelations
> {
  constructor(
    @inject('datasources.tcm23sibdg02') dataSource: Tcm23Sibdg02DataSource,
  ) {
    super(Encomenda, dataSource);
  }
}
