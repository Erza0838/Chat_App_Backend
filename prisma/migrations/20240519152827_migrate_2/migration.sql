/*
  Warnings:

  - Added the required column `Messages_Admin_And_Member` to the `grup_chat_information` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Messages_To_All` to the `grup_chat_information` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `grup_chat_information` ADD COLUMN `Create_Grup_Message` DATETIME(3) NULL,
    ADD COLUMN `Delete_Grup_Message` DATETIME(3) NULL,
    ADD COLUMN `Messages_Admin_And_Member` TEXT NOT NULL,
    ADD COLUMN `Messages_To_All` TEXT NOT NULL,
    ADD COLUMN `Update_Grup_Message` DATETIME(3) NULL,
    MODIFY `Grup_Picture_Profile` blob NULL;

-- CreateTable
CREATE TABLE `grup_list_member` (
    `List_Id_Grup_Members` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`List_Id_Grup_Members`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `grup_list_member` ADD CONSTRAINT `grup_list_member_List_Id_Grup_Members_fkey` FOREIGN KEY (`List_Id_Grup_Members`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
