import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Tcm23Sibdg02DataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.nCliente,
  ClienteRelations
> {
  constructor(
    @inject('datasources.tcm23sibdg02') dataSource: Tcm23Sibdg02DataSource,
  ) {
    super(Cliente, dataSource);
  }
}
