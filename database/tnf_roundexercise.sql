-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 35.187.238.139    Database: tnf
-- ------------------------------------------------------
-- Server version	5.7.36-google-log

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6466bf4a-108e-11ec-8a55-42010a940002:1-224232';

--
-- Table structure for table `roundexercise`
--

DROP TABLE IF EXISTS `roundexercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roundexercise` (
  `idcount` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) DEFAULT NULL,
  `idexercise` int(11) DEFAULT NULL,
  `round` int(11) DEFAULT NULL,
  `roundvolume` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`idcount`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roundexercise`
--

LOCK TABLES `roundexercise` WRITE;
/*!40000 ALTER TABLE `roundexercise` DISABLE KEYS */;
INSERT INTO `roundexercise` VALUES (7,29,1,2,1,'2021-11-12'),(8,29,1,2,12,'2021-11-12'),(9,29,1,2,13,'2021-11-12'),(10,29,24,4,5,'2021-11-13'),(11,29,24,4,5,'2021-11-13'),(12,29,24,4,5,'2021-11-13'),(13,29,24,4,5,'2021-11-13'),(14,29,12,1,12,'2021-11-12'),(15,29,12,1,11,'2021-11-12'),(16,29,12,1,1,'2021-11-12'),(17,29,12,1,1,'2021-11-12'),(18,29,23,1,20,'2021-11-13'),(19,29,17,1,12,'2021-11-11'),(20,29,22,4,10,'2021-11-13'),(21,29,22,4,10,'2021-11-13'),(22,29,22,4,10,'2021-11-13'),(23,29,22,4,10,'2021-11-13'),(24,29,8,4,5,'2021-11-08'),(25,29,8,4,5,'2021-11-08'),(26,29,8,4,5,'2021-11-08'),(27,29,8,4,5,'2021-11-08'),(28,29,8,4,10,'2021-11-14'),(29,29,8,4,10,'2021-11-14'),(30,29,8,4,10,'2021-11-14'),(31,29,8,4,10,'2021-11-14'),(32,29,1,4,10,'2021-11-16'),(33,29,1,4,10,'2021-11-16'),(34,29,1,4,10,'2021-11-16'),(35,29,1,4,10,'2021-11-16'),(36,43,8,4,10,'2021-11-15'),(37,43,8,4,11,'2021-11-15'),(38,43,8,4,12,'2021-11-15'),(39,43,8,4,13,'2021-11-15'),(40,44,9,4,10,'2021-11-15'),(41,44,9,4,11,'2021-11-15'),(42,44,9,4,12,'2021-11-15'),(43,44,9,4,13,'2021-11-15'),(44,45,8,3,10,'2021-11-15'),(45,45,8,3,12,'2021-11-15'),(46,45,8,3,14,'2021-11-15'),(47,29,12,4,10,'2021-11-19'),(48,29,12,4,11,'2021-11-19'),(49,29,12,4,10,'2021-11-19'),(50,29,12,4,10,'2021-11-19');
/*!40000 ALTER TABLE `roundexercise` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-21 23:23:02
