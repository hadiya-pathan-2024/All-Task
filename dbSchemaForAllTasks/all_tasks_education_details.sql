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
-- Table structure for table `education_details`
--

DROP TABLE IF EXISTS `education_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_details` (
  `educationid` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `sscboard` varchar(100) DEFAULT NULL,
  `spassingyear` varchar(100) DEFAULT NULL,
  `spercentage` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`educationid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `education_details_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_details`
--

LOCK TABLES `education_details` WRITE;
/*!40000 ALTER TABLE `education_details` DISABLE KEYS */;
INSERT INTO `education_details` VALUES (77,54,'GSEB','2017','88%'),(78,54,'CBSE','2019','77%'),(79,55,'GSEB','2017','88%'),(80,55,'CBSE','2019','77%'),(81,56,'GSEB','2017','88%'),(82,56,'CBSE','2019','77%'),(83,57,'GSEB','2024','88%'),(84,57,'GSEB','2024','88%'),(85,58,'Bscit','2022','77%'),(86,58,'Bscit','2022','77%'),(87,95,'GSEB','2017','88%'),(88,95,'CBSE','2019','77%'),(89,96,'GSEB','2017','88%'),(90,96,'CBSE','2019','77%'),(91,97,'GSEB','2017','88%'),(92,97,'CBSE','2019','77%'),(93,98,'GSEB','2017','88%'),(94,98,'CBSE','2019','77%'),(95,99,'GSEB','2017','88%'),(96,99,'CBSE','2019','77%'),(97,100,'GSEB','2017','88%'),(98,100,'CBSE','2019','77%'),(99,101,'GSEB','2017','88%'),(100,102,'GSEB','2017','88%'),(101,102,'CBSE','2019','77%'),(102,103,'GSEB','2017','88%'),(103,103,'CBSE','2019','77%'),(104,104,'GSEB','2017','88%'),(105,104,'CBSE','2019','77%'),(106,105,'GSEB','2017','88%'),(107,105,'CBSE','2019','77%'),(108,106,'GSEB','2017','88%'),(109,106,'CBSE','2019','77%'),(110,107,'GSEB','2017','88%'),(111,107,'CBSE','2019','77%'),(112,108,'GSEB','2017','88%'),(113,108,'CBSE','2019','77%'),(114,109,'GSEB','2022','90%'),(115,109,'CBSE','2019','77%'),(116,109,'Bscit','2022','90%'),(117,111,'GSEB','2017','77%'),(118,112,'GSEB','2017','77%'),(119,113,'GSEB','2017','77%'),(120,114,'GSEB','2017','77%'),(121,115,'GSEB','2017','77%'),(122,116,'GSEB','2017','77%'),(123,116,'CBSE','2019','88%'),(124,123,'GSEB','2017','89%'),(125,123,'CBSE','2019','77%'),(126,124,'GSEB','2017','66%');
/*!40000 ALTER TABLE `education_details` ENABLE KEYS */;
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
