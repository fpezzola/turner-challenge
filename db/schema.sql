CREATE TABLE `turner_test`.`tweets` (
  `id` VARCHAR(50) NOT NULL,
  `tweet_id` BIGINT(20) NOT NULL,
  `created_at` DATETIME,
  `text` VARCHAR(500) NOT NULL,
  `user` VARCHAR(45) NOT NULL,
  `user_logo_url` VARCHAR(200) NOT NULL,
  `retweet_count` INT NULL,
  `favorite_count` INT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `turner_test`.`tweets` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
