import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23Sibdg02DataSource} from '../datasources';
import {Peca, PecaRelations} from '../models';

export class PecaRepository extends DefaultCrudRepository<
  Peca,
  typeof Peca.prototype.nInterno,
  PecaRelations
> {
  constructor(
    @inject('datasources.tcm23sibdg02') dataSource: Tcm23Sibdg02DataSource,
  ) {
    super(Peca, dataSource);
  }
}
