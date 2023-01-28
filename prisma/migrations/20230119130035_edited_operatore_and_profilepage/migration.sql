/*
  Warnings:

  - You are about to drop the column `confirmed` on the `Operatore` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ProfilePage` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[operatoreId]` on the table `ProfilePage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `operatoreId` to the `ProfilePage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProfilePage" DROP CONSTRAINT "ProfilePage_userId_fkey";

-- DropIndex
DROP INDEX "ProfilePage_userId_key";

-- AlterTable
ALTER TABLE "Operatore" DROP COLUMN "confirmed";

-- AlterTable
ALTER TABLE "ProfilePage" DROP COLUMN "userId",
ADD COLUMN     "operatoreId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePage_operatoreId_key" ON "ProfilePage"("operatoreId");

-- AddForeignKey
ALTER TABLE "ProfilePage" ADD CONSTRAINT "ProfilePage_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
