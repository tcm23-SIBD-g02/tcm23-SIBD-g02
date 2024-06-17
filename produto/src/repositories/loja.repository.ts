import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MydbDataSource} from '../datasources';
import {Loja, LojaRelations} from '../models';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.idLoja,
  LojaRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Loja, dataSource);
  }
}
