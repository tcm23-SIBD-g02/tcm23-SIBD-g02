import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23SibdG02DataSource} from '../datasources';
import {Peca, PecaRelations} from '../models';

export class PecaRepository extends DefaultCrudRepository<
  Peca,
  typeof Peca.prototype.nInterno,
  PecaRelations
> {
  constructor(
    @inject('datasources.Tcm23SibdG02') dataSource: Tcm23SibdG02DataSource,
  ) {
    super(Peca, dataSource);
  }
}
