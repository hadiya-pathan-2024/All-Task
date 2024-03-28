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
-- Table structure for table `tech_known`
--

DROP TABLE IF EXISTS `tech_known`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tech_known` (
  `langId` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `tech_name` varchar(100) DEFAULT NULL,
  `level` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`langId`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `tech_known_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tech_known`
--

LOCK TABLES `tech_known` WRITE;
/*!40000 ALTER TABLE `tech_known` DISABLE KEYS */;
INSERT INTO `tech_known` VALUES (3,55,'php','beginner'),(4,55,'mysql','midiator'),(5,55,'oracle','beginner'),(6,56,'php','beginner'),(7,56,'mysql','midiator'),(8,56,'oracle','beginner'),(9,57,'php','beginner'),(10,57,'mysql','midiator'),(11,57,'oracle','beginner'),(12,58,'undefined','undefined'),(13,58,'undefined','undefined'),(14,58,'undefined','undefined'),(15,83,'php','beginner'),(16,83,'laravel','midiator'),(17,83,'mysql','midiator'),(18,83,'oracle','expert'),(19,84,'php','beginner'),(20,84,'laravel','midiator'),(21,84,'mysql','midiator'),(22,84,'oracle','expert'),(23,93,'php','beginner'),(24,93,'mysql','midiator'),(25,93,'oracle','beginner'),(26,95,'php','beginner'),(27,95,'mysql','midiator'),(28,95,'oracle','beginner'),(29,96,'php','beginner'),(30,96,'mysql','midiator'),(31,96,'oracle','beginner'),(32,97,'php','beginner'),(33,97,'mysql','midiator'),(34,97,'oracle','beginner'),(35,98,'php','beginner'),(36,98,'mysql','midiator'),(37,98,'oracle','beginner'),(38,99,'php','beginner'),(39,99,'mysql','midiator'),(40,99,'oracle','beginner'),(41,100,'php','beginner'),(42,100,'mysql','midiator'),(43,100,'oracle','beginner'),(44,102,'php','beginner'),(45,102,'mysql','midiator'),(46,102,'oracle','beginner'),(47,103,'php','beginner'),(48,103,'mysql','midiator'),(49,103,'oracle','beginner'),(50,104,'php','beginner'),(51,104,'mysql','midiator'),(52,104,'oracle','beginner'),(53,105,'php','beginner'),(54,105,'mysql','midiator'),(55,105,'oracle','beginner'),(56,106,'php','beginner'),(57,106,'mysql','midiator'),(58,106,'oracle','beginner'),(59,107,'php','beginner'),(60,107,'mysql','midiator'),(61,107,'oracle','beginner'),(62,108,'php','beginner'),(63,108,'mysql','midiator'),(64,108,'oracle','beginner'),(65,109,'php','expert'),(66,109,'mysql','expert'),(67,109,'oracle','beginner'),(68,111,'php','midiator'),(69,112,'php','midiator'),(70,113,'php','beginner'),(71,113,'mysql','midiator'),(72,114,'php','beginner'),(73,114,'mysql','midiator'),(74,115,'php','beginner'),(75,115,'mysql','midiator'),(76,116,'php','beginner'),(77,116,'mysql','midiator'),(78,116,'oracle','beginner'),(79,123,'php','beginner'),(80,123,'mysql','midiator'),(81,124,'php','beginner');
/*!40000 ALTER TABLE `tech_known` ENABLE KEYS */;
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
