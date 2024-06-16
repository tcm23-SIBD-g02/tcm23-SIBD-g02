# C1 : Introdução

## Descrição do trabalho

O grupo optou por desenvolver um sistema de informações para uma loja de
peças de reposição automotiva, como parte da avaliação da disciplina de
Sistemas de Informação e Base de Dados.

O sistema abrange uma gama detalhada de informações, incluindo dados sobre
os carros para os quais as peças são destinadas, como marca, modelo, ano e
motorização correspondente.

Cada peça é identificada pela sua zona de instalação (frente, traseira, interior,
motor), número de série, número interno de stock, valor de compra e valor de
venda.

As encomendas são geridas com precisão, com cada uma sendo atribuída a um
número de encomenda, indicando o número de peças incluídas, o valor total a ser
pago pelo cliente e a morada de entrega, além da identificação do cliente.

Os clientes são registados com informações pessoais como nome, morada,
número de telefone e NIF.

Para facilitar a logística, as entregas são organizadas com detalhes específicos,
incluindo o número de encomenda correspondente, morada de entrega e a
matrícula do camião responsável da entrega. Esses dados abrangentes visam
fornecer um sistema robusto e eficiente para gerenciar todas as operações da loja
de peças de reposição automotiva, garantindo um serviço de qualidade para os
clientes e facilitando o controle de stock e logística para os proprietários da loja.

## Modelação do problema

ARMAZEM (MoradaArm (rua, numeroPorta, codPostal), ArmID)

- ⁠ ⁠MoradaArm: Morada do armazém engloba a rua, número de porta e o
código postal.
- ⁠ ⁠ArmID: Número que identifica cada armazém, número unico (Chave
Primária)

LOJA (idLoja, moradaLoja)

- ⁠ ⁠idLoja: id de identificação de cada loja (Chave primária)
- ⁠ ⁠moradaLoja: morada de cada loja


ENCOMENDA (numEnc, moradaEnc, valor)

- ⁠ ⁠numEnc: Número que identifica cada encomenda, número único (Chave
Primária)
- ⁠ ⁠moradaEnc: morada de entrega da encomenda
- ⁠ ⁠valor: valor monetário da encomanda

PECA (zona, nSerie, nInterno, valorCompra, valorVenda)

- ⁠ ⁠zona: zona do carro onde a peça será instalada
- ⁠ ⁠nSerie: número de série da peça
- ⁠ ⁠nInterno: número de identificação da peça na loja (Chave primária)
- ⁠ ⁠valorCompra: valor a que a peça foi comprada à empresa
- ⁠ ⁠valorVenda: preço de venda ao cliente

CLIENTES (nCliente, nome, morada, contacto, nif, pagamento (dinheiro,
multibanco (cartão, transferência)))

- ⁠ ⁠nCliente: número identificativo do cliente (Chave primária)
- ⁠ ⁠nome: nome do cliente
- ⁠ ⁠morada: morada do cliente
- contacto: número de telemóvel inserido pelo cliente
- ⁠ ⁠nif: número de contribuinte inserido pelo cliente

Associações:

```
armazena (armazem, peca) 1:N  P|T
vende (loja, pecas) 1:N T|T
faz_pedidos (loja, armazem) T|P
realiza (loja, encomenda) M:N  T|T
prepara (armazem, encomenda) 1:N T|T
<img width="439" alt="image" src="https://github.com/tcm23-SIBD-g02/tcm23-SIBD-g02/assets/154247538/25c1cea1-11fb-4d81-9594-e0e0560d1465">

```
