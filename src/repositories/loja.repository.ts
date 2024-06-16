import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Tcm23SibdG02DataSource} from '../datasources';
import {Loja, LojaRelations, Peca} from '../models';
import {PecaRepository} from './peca.repository';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.idLoja,
  LojaRelations
> {

  public readonly vende: BelongsToAccessor<Peca, typeof Loja.prototype.idLoja>;

  constructor(
    @inject('datasources.Tcm23SibdG02') dataSource: Tcm23SibdG02DataSource, @repository.getter('PecaRepository') protected pecaRepositoryGetter: Getter<PecaRepository>,
  ) {
    super(Loja, dataSource);
    this.vende = this.createBelongsToAccessorFor('vende', pecaRepositoryGetter,);
    this.registerInclusionResolver('vende', this.vende.inclusionResolver);
  }
}
