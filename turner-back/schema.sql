CREATE SCHEMA `turner_test`;

use `turner_test`;

CREATE TABLE `turner_test`.`tweets` (
  `id` BIGINT(20) NOT NULL,
  `created_at` VARCHAR(50) NOT NULL,
  `text` VARCHAR(500) NOT NULL,
  `user` VARCHAR(45) NOT NULL,
  `retweet_count` INT NULL,
  `favorite_count` INT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `turner_test`.`tweets` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
