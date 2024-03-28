-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: all_tasks
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

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
-- Table structure for table `reference_contact`
--

DROP TABLE IF EXISTS `reference_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference_contact` (
  `referenceid` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `ref_name` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `relation` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`referenceid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `reference_contact_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_contact`
--

LOCK TABLES `reference_contact` WRITE;
/*!40000 ALTER TABLE `reference_contact` DISABLE KEYS */;
INSERT INTO `reference_contact` VALUES (7,55,'chintan','6787567865','sir'),(8,55,'','',''),(9,56,'chintan','6787567865','sir'),(10,56,'','',''),(11,57,'chintan','6787567865','sir'),(12,57,'','',''),(13,58,'chintan,,,','6787567865,,,','sir,,,'),(14,100,'something','8866756565','someone'),(15,102,'something','8866756565','someone'),(16,103,'something','8866756565','someone'),(17,104,'something','8866756565','someone'),(18,105,'something','8866756565','someone'),(19,106,'something','8866756565','someone'),(20,107,'something','8866756565','someone'),(21,108,'something','8866756565','someone'),(22,109,'something','8866756565','someone'),(23,109,'new reference','2222222222','some'),(24,111,'simple','1111111111','simple'),(25,112,'simple','1111111111','simple'),(26,113,'sim','1234567654','sim'),(27,114,'sim','1234567654','sim'),(28,115,'sim','1234567654','sim'),(29,116,'sim','1234567654','sim'),(30,123,'ajx','1234567654','ajx'),(31,124,'aa','1234567654','aa');
/*!40000 ALTER TABLE `reference_contact` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 18:13:01
