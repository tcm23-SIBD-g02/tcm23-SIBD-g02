# C3 : Normalização

## **Relações**

ARMAZEM (ArmID, rua, numeroPorta, codPostal)

LOJA (idLoja, moradaLoja)

ENCOMENDA (numEnc, moradaEnc, valor)

PECA (nInterno, zona, nSerie, valorCompra, valorVenda)

CLIENTES (nCliente, nome, morada, contacto, nif)

PAGAMENTO (nCliente, tipoPagamento, detalhePagamento)

ARMAZENA (ArmID, nInterno)

VENDE (idLoja, nInterno)

EFECTUA_PEDIDOS (idLoja, ArmID)

REALIZA (idLoja, numEnc)

PREPARA (ArmID, numEnc)

COMPRA (nCliente, nInterno)

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


### PECA


### CLIENTES


### PAGAMENTO


### ARMAZENA


### VENDE


### EFETUA_PEDIDOS


### REALIZA


### PREPARA


## COMPRA

