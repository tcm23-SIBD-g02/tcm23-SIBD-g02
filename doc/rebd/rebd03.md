# C3 : Normalização

## **Relações**

ARMAZEM (_**ArmID**_, rua, numeroPorta, codPostal)

LOJA (_**idLoja**_, moradaLoja)

ENCOMENDA (_**numEnc**_, moradaEnc, valor)

PECA (_**nInterno**_, zona, nSerie, valorCompra, valorVenda)

CLIENTES (_**nCliente**_, nome, morada, contacto, nif)

PAGAMENTO (_**nCliente**_, tipoPagamento, detalhePagamento)

## **Normalização do Esquema Relacional**

### **1NF | 2NF | 3NF | BCNF**

### ARMAZEM
| ArmID  |  rua                  | numeroPorta | codPostal |
| :----- | :-------------------- | :---------- | :-------- |
| 000000 | Rua das Pedras Ruivas | 385         | 4455-150  |
| 000000 | Rua de São Brás       | 231         | 4485-046  | 
| 000000 | Rua de Recarei        | 953         | 4465-784  |

### LOJA
| idLoja  | moradaLoja                    |
| :------ | :---------------------------- |
| 000000  | Rua Brito Capelo              |
| 000000  | Rua de Santa Catarina         |
| 000000  | Avenida Dr. Antunes Guimarães |

### ENCOMENDA
| numEnc  | moradaEnc                     | valor | 
| :------ | :---------------------------- | :---- |
| 000000  | Rua Augusta                   | 300   |
| 000000  | Rua 31 de Janeiro             | 125   |
 
### PECA
| nInterno | zona                          | nSerie  | valorCompra | valorVenda |
| :------  | :---------------------------- | :------ | :---------- | :--------- |
| 000000   | Frente                        | 0000000 | 320         | 350        |
| 000000   | Traseira                      | 0000000 | 150         | 160        |
| 000000   | Interior                      | 0000000 | 60          | 75

### CLIENTES
| nCliente   | nome            | morada               | contacto  | nif         |
| :--------- | :-------------- | :------------------- | :-------- | :---------- |
| 00000000   | Rui Silva       | Avenida da Republica | 913571904 | 00000000000 |
| 00000000   | André Pereira   | Rua Roberto Ivens    | 934719253 | 00000000000 |
| 00000000   | Ricardo Tavares | Avenida da Liberdade | 917489275 | 00000000000 |

### PAGAMENTO
| nCliente  | tipoPagamento   | detalhePagamento |
| :-------- | :-------------- | :--------------- |
| 000000    | Multibanco      | Transferência    |
| 000000    | Dinheiro        |                  |
| 000000    | Multibanco      | Cartão           |




