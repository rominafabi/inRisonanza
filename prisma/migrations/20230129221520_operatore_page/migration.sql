/*
  Warnings:

  - You are about to drop the column `profilePic` on the `Operatore` table. All the data in the column will be lost.
  - You are about to drop the column `operatoreId` on the `SocialLink` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cellulare]` on the table `Operatore` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cellulare` to the `Operatore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paginaId` to the `SocialLink` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SocialLink" DROP CONSTRAINT "SocialLink_operatoreId_fkey";

-- AlterTable
ALTER TABLE "Operatore" DROP COLUMN "profilePic",
ADD COLUMN     "cellulare" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SocialLink" DROP COLUMN "operatoreId",
ADD COLUMN     "paginaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Pagina" (
    "id" TEXT NOT NULL,
    "operatoreId" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL DEFAULT '/images/logo/defaultProfilePic.png',
    "Nome" TEXT NOT NULL,
    "Cognome" TEXT NOT NULL,
    "Titolo" TEXT NOT NULL,
    "Biografia" TEXT NOT NULL,

    CONSTRAINT "Pagina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pagina_operatoreId_key" ON "Pagina"("operatoreId");

-- CreateIndex
CREATE UNIQUE INDEX "Operatore_cellulare_key" ON "Operatore"("cellulare");

-- AddForeignKey
ALTER TABLE "Pagina" ADD CONSTRAINT "Pagina_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_paginaId_fkey" FOREIGN KEY ("paginaId") REFERENCES "Pagina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
