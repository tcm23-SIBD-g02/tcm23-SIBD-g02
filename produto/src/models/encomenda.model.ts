import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Encomenda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  numEnc?: number;

  @property({
    type: 'string',
    required: true,
  })
  moradaEnc: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Encomenda>) {
    super(data);
  }
}

export interface EncomendaRelations {
  // describe navigational properties here
}

export type EncomendaWithRelations = Encomenda & EncomendaRelations;
