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
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pwd` varchar(100) DEFAULT NULL,
  `isActivated` tinyint DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (1,'hadiya','pathan','hadiya@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',0,'2024-03-26 04:07:29'),(2,'hk','hk','hk@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',1,'2024-03-26 04:09:45'),(3,'ak','ak','ak@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',1,'2024-03-26 05:08:58'),(4,'kk','kk','kk@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',1,'2024-03-28 08:13:04'),(5,'new','new','new12@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',0,'2024-03-28 09:09:20'),(6,'hello','hello','hello@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',1,'2024-03-28 09:12:40'),(7,'hello','hello','hello@gmail.com','$2b$10$rPV7ux/.05gBi0RTpzhb3.hcHfk443y5EDlFGjLVzy1qGQNNP/X8G',1,'2024-03-28 09:13:57');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
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
