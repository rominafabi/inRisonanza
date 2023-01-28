/*
  Warnings:

  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SocialDen" AS ENUM ('FACEBOOK', 'INSTAGRAM', 'TWITTER', 'YOUTUBE', 'LINKEDIN', 'TELEGRAM', 'PERSONALE');

-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_operatoreId_fkey";

-- DropTable
DROP TABLE "Social";

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" SERIAL NOT NULL,
    "operatoreId" TEXT NOT NULL,
    "denominazione" "SocialDen" NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
