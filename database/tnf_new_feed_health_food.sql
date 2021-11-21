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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6466bf4a-108e-11ec-8a55-42010a940002:1-224234';

--
-- Table structure for table `new_feed_health_food`
--

DROP TABLE IF EXISTS `new_feed_health_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_feed_health_food` (
  `idnew_feed_health_food` int(11) NOT NULL AUTO_INCREMENT,
  `Topic_new_feed_health_food` longtext,
  `Material_new_feed_health_food` longtext,
  `Link_forder_img` longtext,
  `url` longtext,
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`idnew_feed_health_food`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_feed_health_food`
--

LOCK TABLES `new_feed_health_food` WRITE;
/*!40000 ALTER TABLE `new_feed_health_food` DISABLE KEYS */;
INSERT INTO `new_feed_health_food` VALUES (1,'ฟังจากฝั่งญี่ปุ่น ควรกิน “ไข่” วันละกี่ฟอง?','ไข่เป็นอาหารที่อุดมไปด้วยโปรตีนและสารอาหารมากมายยกเว้นวิตามินซีและเส้นใยอาหาร ไข่ 1 ฟองมีปริมาณคอเลสเตอรอลสูงประมาณ 185-200 มิลลิกรัม และค่อนข้างเป็นปริมาณที่สูงเมื่อเทียบกับปริมาณคอเลสเตอรอลที่ร่างกายควรรับเข้าไปวันละไม่เกิน 300 มิลลิกรัม อย่างไรก็ดี คอเลสเตอรอลที่รับเข้าไปไม่มีผลต่อค่าคอเลสเตอรอลที่ตรวจวัดได้ เพราะร้อยละ 80 ของคอเลสเตอรอลในร่างกายจะถูกสร้างจากตับ หากรับประทานอาหารที่มีคอเลสเตอรอลน้อย ตับก็จะสร้างคอเลสเตอรอลที่จำเป็นต่อร่างกายออกมามากขึ้น แต่หากรับประทานอาหารที่มีคอเลสเตอรอลมากร่างกายก็จะสร้างคอเลสเตอรอลออกมาน้อยลง','http://34.126.141.128/images/feed/','https://www.synphaet.co.th/children-ramintra/wp-content/uploads/2020/06/106110201_138912311149664_1117861673356200244_o.jpg',NULL),(2,'คุณสามารถรับประทานอาหารที่มีแคลอรีได้เท่าไหร่ต่อวัน','ทุกคนนั้นรู้ว่าการนับพลังงานที่รับประทานนั้นเป็นหนึ่งในวิธีที่มีประสิทธิภาพที่สุดในการลดน้ำหนัก ผู้หญิงส่วนใหญ่นั้นมักจะต้องการพลังงานประมาณ 2000 แคลอรีเพื่อคงน้ำหนัก และ 1500 แคลอรีเพื่อลดน้ำหนักให้ได้ 1 ปอนด์ต่อสัปดาห์ ผู้ชายนั้นต้องการพลังงาน2500 แคลอรีเพื่อคงน้ำหนักและ 2000 แคลอรีเพื่อลดน้ำหนักให้ได้ 1 ปอนด์ต่อสัปดาห์ และทุกคนต่างก็รู้ว่าคุณสามารถทำได้โดยการออกกำลังกายเพิ่มขึ้นและรับประทานอาหารให้น้อยลง','http://34.126.141.128/images/feed/','https://hd.co.th/system/blog_articles/main_hero_images/000/005/691/large/iStock-649385722_%281%29.jpg',NULL),(3,'ประโยชน์ของน้ำมันมะพร้าว ไอเดียการกินการใช้เพื่อสุขภาพ และข้อควรระวัง','น้ำมันมะพร้าว เป็นไขมันจากเนื้อของลูกมะพร้าวซึ่งสกัดจากธรรมชาติ ไม่ผ่านการฟอกสี หรือกลั่นผสมกับเคมีใดๆ และมีประโยชน์ต่อร่างกายหลายๆ ด้านมาก',NULL,'https://hd.co.th/system/blog_articles/main_hero_images/000/005/411/large/the-benefits-of-coconut-oil.jpg','2021-11-17');
/*!40000 ALTER TABLE `new_feed_health_food` ENABLE KEYS */;
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

-- Dump completed on 2021-11-21 23:23:08
