/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoriaToOperatore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoriaToOperatore" DROP CONSTRAINT "_CategoriaToOperatore_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriaToOperatore" DROP CONSTRAINT "_CategoriaToOperatore_B_fkey";

-- DropIndex
DROP INDEX "Operatore_comuneId_key";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "_CategoriaToOperatore";

-- CreateTable
CREATE TABLE "Servizio" (
    "id" SERIAL NOT NULL,
    "denominazione" TEXT NOT NULL,

    CONSTRAINT "Servizio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiziOperatore" (
    "operatoreId" TEXT NOT NULL,
    "servizioId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ServiziOperatore_pkey" PRIMARY KEY ("operatoreId","servizioId")
);

-- AddForeignKey
ALTER TABLE "ServiziOperatore" ADD CONSTRAINT "ServiziOperatore_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiziOperatore" ADD CONSTRAINT "ServiziOperatore_servizioId_fkey" FOREIGN KEY ("servizioId") REFERENCES "Servizio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
