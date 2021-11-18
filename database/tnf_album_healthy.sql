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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6466bf4a-108e-11ec-8a55-42010a940002:1-222363';

--
-- Table structure for table `album_healthy`
--

DROP TABLE IF EXISTS `album_healthy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album_healthy` (
  `idalbum_healthy` int(11) NOT NULL AUTO_INCREMENT,
  `album_healthy_img` longtext,
  `idnew_feed_health_food` int(11) DEFAULT NULL,
  PRIMARY KEY (`idalbum_healthy`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album_healthy`
--

LOCK TABLES `album_healthy` WRITE;
/*!40000 ALTER TABLE `album_healthy` DISABLE KEYS */;
INSERT INTO `album_healthy` VALUES (1,'https://images.thaiza.com/content/b/364212.jpg',3),(2,'https://obs.line-scdn.net/0heLs1fgW1OmNOSBBgi0pFNHQeOQx9JClgKn5rYBImZFcxf3hneypxDW0cMFE2Kn09IHt3BG5MIVJrKHxhJStx/w644',3),(3,'https://s.isanook.com/wo/0/rp/rc/w850h510/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzEvMTU5MTc5LzExMTExMS5qcGc=.jpg',3),(4,'https://image.bestreview.asia/wp-content/uploads/2020/09/%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B9%81%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88.jpg',2),(5,'https://www.fitterminal.com/wp-content/uploads/2017/12/%E0%B9%81%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%A7%E0%B8%B1%E0%B8%99.jpg',2),(6,'https://lh3.googleusercontent.com/proxy/SEq1EkyTGFTy8mql8Y7AXOuwvlmDJ_x1SxDxXVU1HIqQL-F3dM3HO-6gqvDdO7K1YolCXwAvQOmHSJGnq0G9Sj6Zxm1SXifZuieAWa78dXpuxUqEHaj5ISoSvagrZBJ5dJZtRno0ksH3-qpE6d27l8KNb3Y1le1ef7gSRKVZwElaStLyLiaEBFZ0',2),(7,'https://www.fitterminal.com/wp-content/uploads/2020/10/%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%9F%E0%B8%AD%E0%B8%87.jpg',1),(8,'https://s.isanook.com/he/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hlLzAvdWQvMy8xODAyOS9jaGlsZC1lZ2cuanBn.jpg',1),(9,'https://cdn.shopify.com/s/files/1/0050/6026/4003/files/1f3cfac71e17e57182ab8730db18ba13_480x480.jpg?v=1604996748',1);
/*!40000 ALTER TABLE `album_healthy` ENABLE KEYS */;
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

-- Dump completed on 2021-11-18 20:10:08
