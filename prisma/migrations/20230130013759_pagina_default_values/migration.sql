/*
  Warnings:

  - You are about to drop the column `Biografia` on the `Pagina` table. All the data in the column will be lost.
  - You are about to drop the column `Cognome` on the `Pagina` table. All the data in the column will be lost.
  - You are about to drop the column `Nome` on the `Pagina` table. All the data in the column will be lost.
  - You are about to drop the column `Titolo` on the `Pagina` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pagina" DROP COLUMN "Biografia",
DROP COLUMN "Cognome",
DROP COLUMN "Nome",
DROP COLUMN "Titolo",
ADD COLUMN     "biografia" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "cognome" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nome" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "titolo" TEXT NOT NULL DEFAULT '';
