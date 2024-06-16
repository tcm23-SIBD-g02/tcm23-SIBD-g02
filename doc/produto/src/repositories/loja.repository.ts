import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23Sibdg02DataSource} from '../datasources';
import {Loja, LojaRelations} from '../models';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.idLoja,
  LojaRelations
> {
  constructor(
    @inject('datasources.tcm23sibdg02') dataSource: Tcm23Sibdg02DataSource,
  ) {
    super(Loja, dataSource);
  }
}
