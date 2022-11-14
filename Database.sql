CREATE TABLE `fighting game database`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `name`          VARCHAR(255) NOT NULL ,
  `game` VARCHAR(255) NOT NULL ,
  `special_attacks`   INT NULL ,
  `normal_attacks`     INT NULL ,
  `fastest_special`    INT NULL ,
  `slowest_special`    INT NULL ,
  `fastest_normal`    INT NULL ,
  `slowest_normal`	  INT NULL ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`name`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;