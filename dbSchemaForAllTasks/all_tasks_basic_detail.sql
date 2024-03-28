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
-- Table structure for table `basic_detail`
--

DROP TABLE IF EXISTS `basic_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `designation` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL COMMENT '\\n',
  `gender` varchar(100) DEFAULT NULL,
  `relation` varchar(100) DEFAULT NULL,
  `add1` varchar(100) DEFAULT NULL,
  `add2` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `dob` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basic_detail`
--

LOCK TABLES `basic_detail` WRITE;
/*!40000 ALTER TABLE `basic_detail` DISABLE KEYS */;
INSERT INTO `basic_detail` VALUES (49,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(50,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(51,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(52,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(53,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(54,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(55,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(56,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(57,'hadiya','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(58,'hadiyaaa','pathan','developer','had@gmail.com','7878656745','female','Unmarried','Ahd','Ahd','Ahd','Gujarat','12345','2001/02/18'),(59,'','','','','','undefined','select_relation','','','','select_state','',''),(60,'','','','','','undefined','select_relation','','','','select_state','',''),(61,'hadiay','','','','','undefined','select_relation','','','','select_state','',''),(62,'','','','','','undefined','select_relation','','','','select_state','',''),(63,'','','','','','undefined','select_relation','','','','select_state','',''),(64,'','','','','','female','select_relation','','','','select_state','',''),(65,'','','','','','female','select_relation','','','','select_state','',''),(66,'','','','','','female','select_relation','','','','select_state','',''),(67,'hadiya','','','','','female','select_relation','','','','select_state','',''),(68,'hadiya','pathan','developer','had@gmail.com','6666666666','undefined','Unmarried','undefined','add2','Ahd','Gujarat','12345','2001/12/09'),(69,'hadiya','pathan','developer','had@gmail.com','6666666666','undefined','Unmarried','undefined','add2','Ahd','Gujarat','12345','2001/12/09'),(70,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(71,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(72,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(73,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(74,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(75,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(76,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(77,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(78,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(79,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(80,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(81,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(82,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(83,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(84,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(85,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(86,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(87,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(88,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(89,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(90,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(91,'hadiya','pathan','developer','had@gmail.com','6666666666','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/12/09'),(92,'hadiya','pathan','developer','had@gmail.com','6666666666','undefined','Unmarried','undefined','add2','Ahd','Gujarat','12345','2001/12/09'),(93,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(94,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(95,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(96,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(97,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(98,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(99,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(100,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(101,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(102,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(103,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(104,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(105,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(106,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(107,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(108,'new','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Gujarat','12345','2001/31/2'),(109,'hk','new','new','new@gmail.com','1234545651','female','Unmarried','add1','add2','Ahd','Mumbai','12345','2001/31/2'),(110,'','','','','','undefined','select_relation','','','','select_state','',''),(111,'simple','simple','simple','simple@gmail.com','1234567872','female','Unmarried','simple','simple','simple','Gujarat','11111','2001/02/18'),(112,'simpleupdate','simple','simple','simple@gmail.com','1234567872','female','Unmarried','simple','simple','simple','Gujarat','11111','2001/02/18'),(113,'sim','sim','sim','sim@gmail.com','1234545651','female','Unmarried','sim','sim','sim','Gujarat','12345','2001/02/18'),(114,'sim','sim','sim','sim@gmail.com','1234545651','female','Unmarried','sim','sim','sim','Gujarat','12345','2001/02/18'),(115,'sim','sim','sim','sim@gmail.com','1234545651','female','Unmarried','sim','sim','sim','Gujarat','12345','2001/02/18'),(116,'sim','sim','sim','sim@gmail.com','1234545651','female','Unmarried','sim','sim','sim','Gujarat','12345','2001/02/18'),(117,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'),(118,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'),(119,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'),(120,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'),(121,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'),(122,'undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined'),(123,'ajax','ajax','ajax','ajx@gmail.com','6666666666','female','Unmarried','ajx','ajx','ajx','Gujarat','12345','2001/02/18'),(124,'ss','ss','ss','ss@gmail.com','1111111111','female','Unmarried','aa','aa','aa','Maharashta','12345','2001/02/18');
/*!40000 ALTER TABLE `basic_detail` ENABLE KEYS */;
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
