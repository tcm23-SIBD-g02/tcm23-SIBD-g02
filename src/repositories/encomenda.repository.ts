import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23SibdG02DataSource} from '../datasources';
import {Encomenda, EncomendaRelations} from '../models';

export class EncomendaRepository extends DefaultCrudRepository<
  Encomenda,
  typeof Encomenda.prototype.numEnc,
  EncomendaRelations
> {
  constructor(
    @inject('datasources.Tcm23SibdG02') dataSource: Tcm23SibdG02DataSource,
  ) {
    super(Encomenda, dataSource);
  }
}
