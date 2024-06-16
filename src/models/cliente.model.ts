import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  nCliente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  morada: string;

  @property({
    type: 'number',
    required: true,
  })
  contacto: number;

  @property({
    type: 'number',
    required: true,
  })
  nif: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
