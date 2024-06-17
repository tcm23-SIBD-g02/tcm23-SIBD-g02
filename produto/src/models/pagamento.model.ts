import {Entity, model, property} from '@loopback/repository';

@model()
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
  })
  detalhePagamento?: string;


  constructor(data?: Partial<Pagamento>) {
    super(data);
  }
}

export interface PagamentoRelations {
  // describe navigational properties here
}

export type PagamentoWithRelations = Pagamento & PagamentoRelations;
