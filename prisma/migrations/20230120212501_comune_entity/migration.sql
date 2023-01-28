/*
  Warnings:

  - The primary key for the `Comune` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `regioneId` on the `Comune` table. All the data in the column will be lost.
  - The `id` column on the `Comune` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Regione` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[codice_prov_com]` on the table `Comune` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[comuneId]` on the table `Operatore` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cod_reg` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codice_prov_com` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_prov` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_reg` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sigla` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comuneId` to the `Operatore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comune" DROP CONSTRAINT "Comune_regioneId_fkey";

-- DropForeignKey
ALTER TABLE "Regione" DROP CONSTRAINT "Regione_profilePageId_fkey";

-- DropIndex
DROP INDEX "Comune_regioneId_key";

-- AlterTable
ALTER TABLE "Comune" DROP CONSTRAINT "Comune_pkey",
DROP COLUMN "regioneId",
ADD COLUMN     "cod_reg" TEXT NOT NULL,
ADD COLUMN     "codice_prov_com" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "nome_prov" TEXT NOT NULL,
ADD COLUMN     "nome_reg" TEXT NOT NULL,
ADD COLUMN     "sigla" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Comune_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Operatore" ADD COLUMN     "comuneId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Regione";

-- CreateIndex
CREATE UNIQUE INDEX "Comune_codice_prov_com_key" ON "Comune"("codice_prov_com");

-- CreateIndex
CREATE UNIQUE INDEX "Operatore_comuneId_key" ON "Operatore"("comuneId");

-- AddForeignKey
ALTER TABLE "Operatore" ADD CONSTRAINT "Operatore_comuneId_fkey" FOREIGN KEY ("comuneId") REFERENCES "Comune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
