# C3 : SQL

## DDL
```sql
USE `test`;

DROP TABLE IF EXISTS `Armazem`;

DROP TABLE IF EXISTS `Loja`;

DROP TABLE IF EXISTS `Encomenda`;

DROP TABLE IF EXISTS `Peca`;

DROP TABLE IF EXISTS `Clientes`;


CREATE TABLE IF NOT EXISTS `Armazem` (
    ArmID INT PRIMARY KEY,
    rua VARCHAR(255),
    numeroPorta INT,
    codPostal VARCHAR(7)

);

CREATE TABLE IF NOT EXISTS `Loja` (
    idLoja INT PRIMARY KEY,
    moradaLoja VARCHAR(255)

);

CREATE TABLE IF NOT EXISTS `Encomenda` (
    numEnc INT PRIMARY KEY,
    moradaEnc VARCHAR(255),
    valor DECIMAL(10, 2)
    
);

CREATE TABLE IF NOT EXISTS `Peca` (
    nInterno INT PRIMARY KEY,
    zona VARCHAR(255),
    nSerie VARCHAR(255),
    valorCompra DECIMAL(10, 2),
    valorVenda DECIMAL(10, 2)
);

CREATE TABLE IF NOT EXISTS `Cliente` (
    nCliente INT PRIMARY KEY,
    nome VARCHAR(255),
    morada VARCHAR(255),
    contacto VARCHAR(9),
    nif VARCHAR(9)
  
);

CREATE TABLE IF NOT EXISTS `Pagamento ` (
    nCliente INT,
    tipoPagamento VARCHAR(255),
    detalhePagamento VARCHAR(255),
    FOREIGN KEY (nCliente) REFERENCES CLIENTES(nCliente)

);
);


