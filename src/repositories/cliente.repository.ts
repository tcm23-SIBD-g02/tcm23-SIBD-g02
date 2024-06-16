import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23SibdG02DataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.nCliente,
  ClienteRelations
> {
  constructor(
    @inject('datasources.Tcm23SibdG02') dataSource: Tcm23SibdG02DataSource,
  ) {
    super(Cliente, dataSource);
  }
}
