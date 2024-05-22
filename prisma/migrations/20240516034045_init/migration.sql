-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Genders` CHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Username` VARCHAR(100) NOT NULL,
    `Token` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;