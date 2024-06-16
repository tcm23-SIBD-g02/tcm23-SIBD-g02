import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Pagamento extends Entity {
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
  tipoPagamento: string;

  @property({
    type: 'string',
    required: true,
  })
  detalhePagamento: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pagamento>) {
    super(data);
  }
}

export interface PagamentoRelations {
  // describe navigational properties here
}

export type PagamentoWithRelations = Pagamento & PagamentoRelations;
