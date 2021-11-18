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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6466bf4a-108e-11ec-8a55-42010a940002:1-222362';

--
-- Table structure for table `album_training`
--

DROP TABLE IF EXISTS `album_training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album_training` (
  `idalbum_training` int(11) NOT NULL,
  `album_training_img` longtext,
  `id_exersice` int(11) DEFAULT NULL,
  PRIMARY KEY (`idalbum_training`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album_training`
--

LOCK TABLES `album_training` WRITE;
/*!40000 ALTER TABLE `album_training` DISABLE KEYS */;
INSERT INTO `album_training` VALUES (1,'https://www.gapsfit.com/wp-content/uploads/2020/04/deadlift-how-to-do-1.jpg',1),(2,'https://www.gapsfit.com/wp-content/uploads/2020/04/deadlift-how-to-do-2.jpg',1),(3,'https://www.gapsfit.com/wp-content/uploads/2020/04/deadlift-how-to-do-3.jpg',1),(4,'https://planforfit.com/wp-content/uploads/2015/07/dumbbell-row-start.jpg',2),(5,'https://planforfit.com/wp-content/uploads/2015/07/dumbbell-row-finish.jpg',2),(6,'https://planforfit.com/wp-content/uploads/2015/07/dumbbell-row-start.jpg',2),(7,'https://planforfit.com/wp-content/uploads/2015/07/back-extension-start-resize.jpg',3),(8,'https://planforfit.com/wp-content/uploads/2015/07/back-extension-finish-resize.jpg',3),(9,'https://planforfit.com/wp-content/uploads/2015/07/back-extension-start-resize.jpg',3),(10,'https://www.exercises.com.au/wp-content/uploads/2015/09/Dumbbell-upright-row-1.png',4),(11,'https://www.exercises.com.au/wp-content/uploads/2015/09/Dumbbell-upright-row-1.png',4),(12,'https://www.exercises.com.au/wp-content/uploads/2015/09/Dumbbell-upright-row-1.png',4),(13,'https://planforfit.com/wp-content/uploads/2015/06/t-bar-row-start-1.jpg',5),(14,'https://planforfit.com/wp-content/uploads/2015/06/t-bar-row-finish-1.jpg',5),(15,'https://planforfit.com/wp-content/uploads/2015/06/t-bar-row-start-1.jpg',5),(16,'https://planforfit.com/wp-content/uploads/2015/07/wide-grip-lat-pulldown-start-resize1.jpg',6),(17,'https://planforfit.com/wp-content/uploads/2015/07/wide-grip-lat-pulldown-finish-resize1.jpg',6),(18,'https://planforfit.com/wp-content/uploads/2015/07/wide-grip-lat-pulldown-start-resize1.jpg',6),(19,'https://planforfit.com/wp-content/uploads/2016/09/v-grip-seated-row-start.jpg',7),(20,'https://planforfit.com/wp-content/uploads/2016/09/v-grip-seated-row-finish.jpg',7),(21,'https://planforfit.com/wp-content/uploads/2016/09/v-grip-seated-row-start.jpg',7),(22,'https://planforfit.com/wp-content/uploads/2015/06/cable-crossover-resize-start-1.jpg',8),(23,'https://planforfit.com/wp-content/uploads/2015/06/cable-crossover-resize-finish-1.jpg',8),(24,'https://planforfit.com/wp-content/uploads/2015/06/cable-crossover-resize-start-1.jpg',8),(25,'https://planforfit.com/wp-content/uploads/2015/07/wide-grip-flat-barbell-bench-press-start-1.jpg',9),(26,'https://planforfit.com/wp-content/uploads/2015/07/wide-grip-flat-barbell-bench-press-finish-1.jpg',9),(27,'https://planforfit.com/wp-content/uploads/2015/07/wide-grip-flat-barbell-bench-press-start-1.jpg',9),(28,'https://planforfit.com/wp-content/uploads/2015/07/incline-dumbbell-bench-press-finish-resize.jpg',10),(29,'https://planforfit.com/wp-content/uploads/2015/07/incline-dumbbell-bench-press-start-resize.jpg',10),(30,'https://planforfit.com/wp-content/uploads/2015/07/incline-dumbbell-bench-press-finish-resize.jpg',10),(31,'https://planforfit.com/wp-content/uploads/2015/07/pec-deck-flys-finish-1.jpg',11),(32,'https://planforfit.com/wp-content/uploads/2015/07/pec-deck-flys-start-1.jpg',11),(33,'https://planforfit.com/wp-content/uploads/2015/07/pec-deck-flys-finish-1.jpg',11),(34,'https://planforfit.com/wp-content/uploads/2015/07/barbell-squat-start-resize-1-1.jpg',12),(35,'https://planforfit.com/wp-content/uploads/2015/07/barbell-squat-finish-resize-1-1.jpg',12),(36,'https://planforfit.com/wp-content/uploads/2015/07/barbell-squat-start-resize-1-1.jpg',12),(37,'https://planforfit.com/wp-content/uploads/2015/07/leg-press-start-resize1.jpg',13),(38,'https://planforfit.com/wp-content/uploads/2015/07/leg-press-finish-resize1.jpg',13),(39,'https://planforfit.com/wp-content/uploads/2015/07/leg-press-start-resize1.jpg',13),(40,'https://planforfit.com/wp-content/uploads/2015/07/leg-extension-start.jpg',14),(41,'https://planforfit.com/wp-content/uploads/2015/07/leg-extension-finish.jpg',14),(42,'https://planforfit.com/wp-content/uploads/2015/07/leg-extension-start.jpg',14),(43,'https://planforfit.com/wp-content/uploads/2015/07/lying-leg-curl-start-resize.jpg',15),(44,'https://planforfit.com/wp-content/uploads/2015/07/lying-leg-curl-finish-resize-1-1.jpg',15),(45,'https://planforfit.com/wp-content/uploads/2015/07/lying-leg-curl-start-resize.jpg',15),(46,'http://www.tuvayanon.net/S-ex6-001001J-570809-1414-a11.jpg',16),(47,'http://www.tuvayanon.net/S-ex6-001001J-570809-1414-a11.jpg',16),(48,'http://www.tuvayanon.net/S-ex6-001001J-570809-1414-a11.jpg',16),(49,'https://planforfit.com/wp-content/uploads/2015/08/seated-barbell-shoulder-press-start.jpg',17),(50,'https://planforfit.com/wp-content/uploads/2015/08/seated-barbell-shoulder-press-finish.jpg',17),(51,'https://planforfit.com/wp-content/uploads/2015/08/seated-barbell-shoulder-press-start.jpg',17),(52,'https://planforfit.com/wp-content/uploads/2015/07/standing-dumbbell-side-lateral-start.jpg',18),(53,'https://planforfit.com/wp-content/uploads/2015/07/standing-dumbbell-side-lateral-finish.jpg',18),(54,'https://planforfit.com/wp-content/uploads/2015/07/standing-dumbbell-side-lateral-start.jpg',18),(55,'https://planforfit.com/wp-content/uploads/2015/07/seated-dumbbell-shoulder-press-finish.jpg',19),(56,'https://planforfit.com/wp-content/uploads/2015/07/seated-dumbbell-shoulder-press-start.jpg',19),(57,'https://planforfit.com/wp-content/uploads/2015/07/seated-dumbbell-shoulder-press-finish.jpg',19),(58,'https://planforfit.com/wp-content/uploads/2015/07/cable-rear-delt-fly-start-1.jpg',20),(59,'https://planforfit.com/wp-content/uploads/2015/07/cable-rear-delt-fly-finish-1.jpg',20),(60,'https://planforfit.com/wp-content/uploads/2015/07/cable-rear-delt-fly-start-1.jpg',20),(61,'https://planforfit.com/wp-content/uploads/2015/07/ez-bar-peacher-curl-start-1-1.jpg',22),(62,'https://planforfit.com/wp-content/uploads/2015/07/ez-bar-peacher-curl-finish-1-1.jpg',22),(63,'https://planforfit.com/wp-content/uploads/2015/07/ez-bar-peacher-curl-start-1-1.jpg',22),(64,'https://planforfit.com/wp-content/uploads/2015/07/dumbbell-lying-triceps-extension-start-1-1.jpg',23),(65,'https://planforfit.com/wp-content/uploads/2015/07/dumbbell-lying-triceps-extension-finish-1-1.jpg',23),(66,'https://planforfit.com/wp-content/uploads/2015/07/dumbbell-lying-triceps-extension-start-1-1.jpg',23),(67,'https://planforfit.com/wp-content/uploads/2015/07/triceps-pushdown-straigth-bar-start-1-1.jpg',24),(68,'https://planforfit.com/wp-content/uploads/2015/07/triceps-pushdown-straigth-bar-finish-1-1.jpg',24),(69,'https://planforfit.com/wp-content/uploads/2015/07/triceps-pushdown-straigth-bar-start-1-1.jpg',24);
/*!40000 ALTER TABLE `album_training` ENABLE KEYS */;
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

-- Dump completed on 2021-11-18 20:10:03
