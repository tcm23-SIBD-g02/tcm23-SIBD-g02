import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Peca} from './peca.model';
import {Encomenda} from './encomenda.model';

@model({settings: {strict: false}})
export class Loja extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idLoja?: number;

  @property({
    type: 'string',
    required: true,
  })
  moradaLoja: string;

  @hasMany(() => Peca)
  vende: Peca[];

  @belongsTo(() => Encomenda, {name: 'realiza'})
  encomendaId: number;

  @belongsTo(() => Peca, {name: 'vende'})
  pecaId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Loja>) {
    super(data);
  }
}

export interface LojaRelations {
  // describe navigational properties here
}

export type LojaWithRelations = Loja & LojaRelations;
