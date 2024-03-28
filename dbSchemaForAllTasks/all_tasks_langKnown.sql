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
-- Table structure for table `langKnown`
--

DROP TABLE IF EXISTS `langKnown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `langKnown` (
  `langId` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `lang_name` varchar(100) DEFAULT NULL,
  `can_read` varchar(100) DEFAULT NULL,
  `can_write` varchar(100) DEFAULT NULL,
  `can_speak` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`langId`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `langKnown_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `langKnown`
--

LOCK TABLES `langKnown` WRITE;
/*!40000 ALTER TABLE `langKnown` DISABLE KEYS */;
INSERT INTO `langKnown` VALUES (5,55,'english','1','1','1'),(6,55,'hindi','1','0','1'),(7,56,'english','1','1','1'),(8,56,'hindi','1','0','1'),(9,57,'english','1','1','1'),(10,57,'hindi','1','0','1'),(11,58,'undefined','undefined','undefined','undefined'),(12,58,'undefined','undefined','undefined','undefined'),(13,82,'english','1','1','1'),(14,82,'hindi','1','0','1'),(15,82,'gujarati','1','0','0'),(16,83,'english','1','1','1'),(17,83,'hindi','1','0','1'),(18,83,'gujarati','1','0','0'),(19,84,'english','1','1','1'),(20,84,'hindi','1','0','1'),(21,84,'gujarati','1','0','0'),(22,93,'english','1','1','1'),(23,93,'hindi','1','0','1'),(24,93,'gujarati','1','0','0'),(25,95,'english','1','1','1'),(26,95,'hindi','1','0','1'),(27,95,'gujarati','1','0','0'),(28,96,'english','1','1','1'),(29,96,'hindi','1','0','1'),(30,96,'gujarati','1','0','0'),(31,97,'english','1','1','1'),(32,97,'hindi','1','0','1'),(33,97,'gujarati','1','0','0'),(34,98,'english','1','1','1'),(35,98,'hindi','1','0','1'),(36,98,'gujarati','1','0','0'),(37,99,'english','1','1','1'),(38,99,'hindi','1','0','1'),(39,99,'gujarati','1','0','0'),(40,100,'english','1','1','1'),(41,100,'hindi','1','0','1'),(42,100,'gujarati','1','0','0'),(43,102,'english','1','1','1'),(44,102,'hindi','1','0','1'),(45,102,'gujarati','1','0','0'),(46,103,'english','1','1','1'),(47,103,'hindi','1','0','1'),(48,103,'gujarati','1','0','0'),(49,104,'english','1','1','1'),(50,104,'hindi','1','0','1'),(51,104,'gujarati','1','0','0'),(52,105,'english','1','1','1'),(53,105,'hindi','1','0','1'),(54,105,'gujarati','1','0','0'),(55,106,'english','1','1','1'),(56,106,'hindi','1','0','1'),(57,106,'gujarati','1','0','0'),(58,107,'english','1','1','1'),(59,107,'hindi','1','0','1'),(60,107,'gujarati','1','0','0'),(61,108,'english','1','0','0'),(62,108,'hindi','1','1','0'),(63,108,'gujarati','1','0','1'),(64,109,'gujarati','1','0','0'),(65,109,'gujarati','1','0','0'),(66,109,'gujarati','1','0','0'),(67,109,'english','1','1','1'),(68,109,'english','1','1','1'),(69,109,'english','1','1','1'),(70,109,'hindi','1','1','0'),(71,111,'english','1','1','1'),(72,112,'english','1','1','1'),(73,113,'english','1','1','1'),(74,114,'english','1','1','1'),(75,115,'english','1','1','1'),(76,116,'english','1','1','1'),(77,116,'hindi','1','0','0'),(78,123,'english','1','1','1'),(79,123,'hindi','1','0','1'),(80,124,'english','1','1','1');
/*!40000 ALTER TABLE `langKnown` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 18:13:02
