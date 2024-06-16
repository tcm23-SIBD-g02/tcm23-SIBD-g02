import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Peca extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  nInterno: number;

  @property({
    type: 'string',
    required: true,
  })
  zona: string;

  @property({
    type: 'number',
    required: true,
  })
  nSerie: number;

  @property({
    type: 'number',
    required: true,
  })
  valorCompra: number;

  @property({
    type: 'number',
    required: true,
  })
  valorVenda: number;

  @property({
    type: 'number',
  })
  lojaId?: number;

  @property({
    type: 'number',
  })
  armazemId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Peca>) {
    super(data);
  }
}

export interface PecaRelations {
  // describe navigational properties here
}

export type PecaWithRelations = Peca & PecaRelations;
