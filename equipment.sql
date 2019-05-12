/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : equipment

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-04-15 11:06:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `manage_class`
-- ----------------------------
DROP TABLE IF EXISTS `manage_class`;
CREATE TABLE `manage_class` (
  `id` smallint NOT NULL AUTO_INCREMENT COMMENT '种类编号 主键',
  `class_name` varchar(50) NOT NULL COMMENT '种类名称',
  `class_desc` text DEFAULT NULL COMMENT '种类描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '设备种类表';

-- ----------------------------
-- Records of manage_class
-- ----------------------------

-- ----------------------------
-- Table structure for `manage_examine`
-- ----------------------------
DROP TABLE IF EXISTS `manage_examine`;
CREATE TABLE `manage_examine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `equip_id` mediumint DEFAULT NULL COMMENT '设备ID',
  `check_date` date COMMENT '检修日期x-x-x',
  `check_person` smallint NOT NULL COMMENT '检修人员id',
  `check_state` tinyint DEFAULT 0 COMMENT '运行状况 0- 正常or -1-异常',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '检修表';

-- ----------------------------
-- Records of manage_examine
-- ----------------------------

-- ----------------------------
-- Table structure for `manage_info`
-- ----------------------------
DROP TABLE IF EXISTS `manage_info`;
CREATE TABLE `manage_info` (
  `id` mediumint NOT NULL AUTO_INCREMENT COMMENT '设备编号  主键',
  `class_id` smallint NOT NULL COMMENT '种类编号   Class外键',
  `equip_type` varchar(50) NOT NULL COMMENT '设备型号',
  `manufacture` varchar(50) DEFAULT NULL COMMENT '制造厂商',
  `price` varchar(50) not null comment '设备价格',
  `proydate` date  COMMENT '生产日期',
  `buydate` date  COMMENT '购买日期',
  `pre_year` tinyint DEFAULT 5 COMMENT '使用年限',
  `equip_state` tinyint DEFAULT 0 COMMENT '设备状态-1-异常 0-运行 1-维修 2-报废',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '设备信息表';

-- ----------------------------
-- Records of manage_info
-- ----------------------------

-- ----------------------------
-- Table structure for `manage_repair`
-- ----------------------------
DROP TABLE IF EXISTS `manage_repair`;
CREATE TABLE `manage_repair` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `equip_id` mediumint not null COMMENT '设备编号 主键',
  `reason` text DEFAULT NULL COMMENT '故障原因',
  `repair_date` date COMMENT '送修日期',
  `pre_finishdate` date  COMMENT '预计交付时间',
  `repair_fee` varchar(50) DEFAULT 0 COMMENT '维修费用',
  `repair_man` varchar(50) NOT NULL COMMENT '维修人员联系方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '设备维修表';

-- ----------------------------
-- Records of manage_repair
-- ----------------------------

-- ----------------------------
-- Table structure for `manage_scrap`
-- ----------------------------
DROP TABLE IF EXISTS `manage_scrap`;
CREATE TABLE `manage_scrap` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '报废id',
  `equip_id` mediumint NOT NULL COMMENT '设备ID',
  `scrap_date` date COMMENT '报废日期',
  `scrap_reason` text DEFAULT NULL COMMENT '报废原因',
  `request_man` smallint NOT NULL COMMENT '申请人id',
  `oldprice` varchar(50) NOT NULL COMMENT '原价',
  `scrapprice` varchar(50) NOT NULL COMMENT '折旧价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 comment '设备报废表';

-- ----------------------------
-- Records of manage_scrap
-- ----------------------------

-- ----------------------------
-- Table structure for `manage_user`
-- ----------------------------
DROP TABLE IF EXISTS `manage_user`;
CREATE TABLE `manage_user` (
  `id` smallint(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `account` varchar(20) NOT NULL COMMENT '登录账号',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL,
  `depart` tinyint NOT NULL COMMENT '归属部门id',
  `type` tinyint NOT NULL COMMENT '1检修员 2系统管理员 3 维修员',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 comment '用户表';
-- ----------------------------
-- Records of manage_user
-- ----------------------------

DROP TABLE IF EXISTS `manage_depart`;
CREATE TABLE `manage_depart` (
  `id` tinyint(11) NOT NULL AUTO_INCREMENT COMMENT '部门编号',
  `depart` varchar(50) NOT NULL COMMENT '部门名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='部门表';
