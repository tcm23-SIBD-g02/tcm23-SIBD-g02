-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `armazem`
--

DROP TABLE IF EXISTS `armazem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armazem` (
  `ArmID` int NOT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `numeroPorta` int DEFAULT NULL,
  `codpostal` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`ArmID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armazem`
--

LOCK TABLES `armazem` WRITE;
/*!40000 ALTER TABLE `armazem` DISABLE KEYS */;
INSERT INTO `armazem` VALUES (0,'Rua das Pedras Ruivas',385,'4305'),(1,'Ruas de São Brás',231,'4439'),(2,'Rua de Recarei',953,'3681'),(126845,'Ruas de São Brás',231,'4439'),(154586,'Rua das Pedras Ruivas',385,'4305'),(763185,'Rua de Recarei',953,'3681');
/*!40000 ALTER TABLE `armazem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `nCliente` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `morada` varchar(255) DEFAULT NULL,
  `contacto` varchar(9) DEFAULT NULL,
  `nif` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`nCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (0,'Rui Silva','350','913571904','0'),(1,'André Pereira','125','934719253','0'),(2,'Ricardo Tavares','412','917489275','0'),(1253684,'André Pereira','125','934719253','987654321'),(1586958,'Ricardo Tavares','412','917489275','654987321'),(7569825,'Rui Silva','350','913571904','123456789');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encomenda`
--

DROP TABLE IF EXISTS `encomenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encomenda` (
  `numEnc` int NOT NULL,
  `moradaEnc` varchar(255) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`numEnc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encomenda`
--

LOCK TABLES `encomenda` WRITE;
/*!40000 ALTER TABLE `encomenda` DISABLE KEYS */;
INSERT INTO `encomenda` VALUES (1,'Rua Augusta',300.00),(2,'Rua 31 de Janeiro',125.00),(854265,'Rua Augusta',300.00),(968123,'Rua 31 de Janeiro',125.00);
/*!40000 ALTER TABLE `encomenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loja`
--

DROP TABLE IF EXISTS `loja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loja` (
  `idLoja` int NOT NULL,
  `moradaLoja` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idLoja`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loja`
--

LOCK TABLES `loja` WRITE;
/*!40000 ALTER TABLE `loja` DISABLE KEYS */;
INSERT INTO `loja` VALUES (0,'Rua Brito Capelo'),(1,'Rua de Santa Catarina'),(2,'Avenida Dr. Antunes Guimarães'),(354786,'Avenida Dr. Antunes Guimarães'),(785165,'Rua Brito Capelo'),(965478,'Rua de Santa Catarina');
/*!40000 ALTER TABLE `loja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento` (
  `nCliente` int NOT NULL,
  `tipoPagamento` varchar(255) DEFAULT NULL,
  `detalhePagamento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento`
--

LOCK TABLES `pagamento` WRITE;
/*!40000 ALTER TABLE `pagamento` DISABLE KEYS */;
INSERT INTO `pagamento` VALUES (0,'Multibanco','Transferência'),(1,'Dinheiro',''),(2,'Multibanco','Cartão'),(365185,'Dinheiro',''),(782592,'Multibanco','Transferência'),(958152,'Multibanco','Cartão');
/*!40000 ALTER TABLE `pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peca`
--

DROP TABLE IF EXISTS `peca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peca` (
  `nInterno` int NOT NULL,
  `zona` varchar(255) DEFAULT NULL,
  `nSerie` varchar(255) DEFAULT NULL,
  `valorCompra` decimal(10,2) DEFAULT NULL,
  `valorVenda` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`nInterno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peca`
--

LOCK TABLES `peca` WRITE;
/*!40000 ALTER TABLE `peca` DISABLE KEYS */;
INSERT INTO `peca` VALUES (0,'Frente','0',320.00,350.00),(1,'Traseira','0',150.00,160.00),(2,'Interior','0',60.00,75.00),(152485,'Traseira','35481259',150.00,160.00),(524987,'Frente','9681235',320.00,350.00),(964525,'Interior','7983254',60.00,75.00);
/*!40000 ALTER TABLE `peca` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-17 20:10:31
