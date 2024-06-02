# C4 : Esquema Relacional
## 02 Nuno Pinto, Jorge Fonseca

**Esquema Relacional** 

ARMAZEM
- __ArmID__
- rua
- numeroPorta
- codPostal

LOJA
- __idLoja__
- moradaLoja

ENCOMENDA
- __numEnc__
- moradaEnc
- valor

PECA
- __nInterno__
- zona
- nSerie
- valorCompra
- valorVenda

CLIENTES
- __nCliente__
- nome
- morada
- contacto
- nif

PAGAMENTO
- __nCliente__ , (Chave Estrangeira -> CLIENTES.nCliente)
- tipoPagamento
- detalhePagamento

ARMAZENA
- __ArmID__ , (Chave Estrangeira -> ARMAZEM.ArmID)
- nInterno (PK, FK -> PECA.nInterno)

VENDE
- __idLoja__ (Chave Estrangeira -> LOJA.idLoja)
- __nInterno__ (Chave Estrangeira -> PECA.nInterno)

EFECTUA_PEDIDOS
- __idLoja__ (Chave Estrangeira -> LOJA.idLoja)
- __ArmID__ (Chave Estrangeira -> ARMAZEM.ArmID)

REALIZA
- __idLoja__ (Chave Estrangeira -> LOJA.idLoja)
- __numEnc__ (Chave Estrangeira -> ENCOMENDA.numEnc)

PREPARA
- __ArmID__ (Chave Estrangeira -> ARMAZEM.ArmID)
- __numEnc__ (Chave Estrangeira -> ENCOMENDA.numEnc)

COMPRA
- __nCliente__ (Chave Estrangeira -> CLIENTES.nCliente)
- __nInterno__ (Chave Estrangeira -> PECA.nInterno)

## Tabela Armazem

### Descrição da tabela Armazem
A tabela Armazem armazena informações sobre os armazéns da loja.

#### COLUNAS

| Nome         | Descrição            | Tipo    | Obrigatório | Automático | Nulo  |
|--------------|----------------------|---------|-------------|------------|-------|
| ArmID        | ID do Armazem        | INT     | Sim         | Não        | Não   |
| rua          | Rua do Armazem       | VARCHAR | Sim         | Não        | Não   |
| numeroPorta  | Número da Porta      | INTEGER | Sim         | Não        | Não   |
| codPostal    | Código Postal        | VARCHAR | Sim         | Não        | Não   |

#### Restrições de Integridade

- **Chave Primária**:
  - ArmID

## Tabela Loja

### Descrição da tabela Loja
A tabela Loja armazena informações sobre as lojas.

#### COLUNAS

| Nome          | Descrição             | Tipo    | Obrigatório | Automático | Nulo  |
|---------------|-----------------------|---------|-------------|------------|-------|
| idLoja        | ID da Loja            | INT     | Sim         | Não        | Não   |
| moradaLoja    | Morada da Loja        | VARCHAR | Sim         | Não        | Não   |

#### Restrições de Integridade

- **Chave Primária**:
  - idLoja

## Tabela Encomenda

### Descrição da tabela Encomenda
A tabela Encomenda armazena informações sobre as encomendas.

#### COLUNAS

| Nome             | Descrição               | Tipo    | Obrigatório | Automático | Nulo  |
|------------------|-------------------------|---------|-------------|------------|-------|
| numEnc           | Número da Encomenda     | INT     | Sim         | Não        | Não   |
| moradaEnc        | Morada da Encomenda     | VARCHAR | Sim         | Não        | Não   |
| valor            | Valor da Encomenda      | DECIMAL | Sim         | Não        | Não   |

#### Restrições de Integridade

- **Chave Primária**:
  - numEnc

## Tabela Peca

### Descrição da tabela Peca
A tabela Peca armazena informações sobre as peças.

#### COLUNAS

| Nome           | Descrição               | Tipo    | Obrigatório | Automático | Nulo  |
|----------------|-------------------------|---------|-------------|------------|-------|
| nInterno       | Número Interno          | INT     | Sim         | Não        | Não   |
| zona           | Zona da Peça            | VARCHAR | Sim         | Não        | Não   |
| nSerie         | Número de Série         | VARCHAR | Sim         | Não        | Não   |
| valorCompra    | Valor de Compra         | DECIMAL | Sim         | Não        | Não   |
| valorVenda     | Valor de Venda          | DECIMAL | Sim         | Não        | Não   |

#### Restrições de Integridade

- **Chave Primária**:
  - nInterno

## Tabela Clientes

### Descrição da tabela Clientes
A tabela Clientes armazena informações sobre os clientes.

#### COLUNAS

| Nome         | Descrição            | Tipo    | Obrigatório | Automático | Nulo  |
|--------------|----------------------|---------|-------------|------------|-------|
| nCliente     | Número do Cliente    | INT     | Sim         | Não        | Não   |
| nome         | Nome do Cliente      | VARCHAR | Sim         | Não        | Não   |
| morada       | Morada do Cliente    | VARCHAR | Sim         | Não        | Não   |
| contacto     | Contacto do Cliente  | VARCHAR | Sim         | Não        | Não   |
| nif          | NIF do Cliente       | INT     | Sim         | Não        | Não   |

#### Restrições de Integridade

- **Chave Primária**:
  - nCliente

## Tabela Pagamento

### Descrição da tabela Pagamento
A tabela Pagamento armazena informações sobre os pagamentos.

#### COLUNAS

| Nome             | Descrição                   | Tipo    | Obrigatório | Automático | Nulo  |
|------------------|-----------------------------|---------|-------------|------------|-------|
| nCliente         | Número do Cliente           | INT     | Sim         | Não        | Não   |
| tipoPagamento    | Tipo de Pagamento           | VARCHAR | Sim         | Não        | Não   |
| detalhePagamento | Detalhe do Pagamento        | VARCHAR | Sim         | Não        | Não   |

#### Restrições de Integridade

- **Chave Primária**:
  - nCliente
- **Chave Estrangeira**:
  - nCliente REFERENCES Clientes(nCliente)

[< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md)
:--- | :---: | ---: 
Suporte Técnico: acesso ao suporte técnico; disponibilidade de manuais de usuário e guias de procedimento. 
