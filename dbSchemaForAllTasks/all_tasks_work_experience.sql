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
-- Table structure for table `work_experience`
--

DROP TABLE IF EXISTS `work_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_experience` (
  `experienceid` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `Designation` varchar(100) DEFAULT NULL,
  `from_date` varchar(100) DEFAULT NULL,
  `to_date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`experienceid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `work_experience_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_experience`
--

LOCK TABLES `work_experience` WRITE;
/*!40000 ALTER TABLE `work_experience` DISABLE KEYS */;
INSERT INTO `work_experience` VALUES (9,55,'espark','developer','2022/01/22','2023/01/22'),(10,55,'','','',''),(11,55,'','','',''),(12,57,'espark','deve','2002/09/03','2001/09/02'),(13,58,'new','new','2023/2/4','2022/09/02'),(14,97,'espark','developer','2002/09/03','2000/12/2'),(15,97,'','','',''),(16,97,'','','',''),(17,98,'espark','developer','2002/09/03','2000/12/2'),(18,98,'','','',''),(19,98,'','','',''),(20,99,'espark','developer','2002/09/03','2000/12/2'),(21,100,'espark','developer','2002/09/03','2000/12/2'),(22,102,'espark','developer','2002/09/03','2000/12/2'),(23,103,'espark','developer','2002/09/03','2000/12/2'),(24,104,'espark','developer','2002/09/03','2000/12/2'),(25,105,'espark','developer','2002/09/03','2000/12/2'),(26,106,'espark','developer','2002/09/03','2000/12/2'),(27,107,'espark','developer','2002/09/03','2000/12/2'),(28,108,'espark','developer','2002/09/03','2000/12/2'),(29,109,'espark','developer','2002/09/03','2000/12/2'),(30,109,'new company','designer','2023/2/4','2022/09/02'),(31,111,'simple','simple','2002/09/03','2000/12/2'),(32,112,'simple','simple','2002/09/03','2000/12/2'),(33,113,'sim','sim','2002/09/03','2000/12/2'),(34,114,'sim','sim','2002/09/03','2000/12/2'),(35,115,'sim','sim','2002/09/03','2000/12/2'),(36,116,'sim','sim','2002/09/03','2000/12/2'),(37,123,'ajx','ajx','2023/2/4','2000/12/2'),(38,124,'aa','aa','2023/2/4','2022/09/02');
/*!40000 ALTER TABLE `work_experience` ENABLE KEYS */;
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
