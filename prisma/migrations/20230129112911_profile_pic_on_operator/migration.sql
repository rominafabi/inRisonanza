/*
  Warnings:

  - Added the required column `comuneId` to the `ServiziOperatore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Operatore" ADD COLUMN     "profilePic" TEXT NOT NULL DEFAULT '/images/logo/defaultProfilePic.png';

-- AlterTable
ALTER TABLE "ServiziOperatore" ADD COLUMN     "comuneId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ServiziOperatore" ADD CONSTRAINT "ServiziOperatore_comuneId_fkey" FOREIGN KEY ("comuneId") REFERENCES "Comune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
