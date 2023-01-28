/*
  Warnings:

  - You are about to drop the column `cod_reg` on the `Comune` table. All the data in the column will be lost.
  - You are about to drop the column `codice_prov_com` on the `Comune` table. All the data in the column will be lost.
  - You are about to drop the column `nome_prov` on the `Comune` table. All the data in the column will be lost.
  - You are about to drop the column `nome_reg` on the `Comune` table. All the data in the column will be lost.
  - Added the required column `codReg` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codiceProvCom` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeProv` to the `Comune` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeReg` to the `Comune` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Comune_codice_prov_com_key";

-- AlterTable
ALTER TABLE "Comune" DROP COLUMN "cod_reg",
DROP COLUMN "codice_prov_com",
DROP COLUMN "nome_prov",
DROP COLUMN "nome_reg",
ADD COLUMN     "codReg" TEXT NOT NULL,
ADD COLUMN     "codiceProvCom" TEXT NOT NULL,
ADD COLUMN     "nomeProv" TEXT NOT NULL,
ADD COLUMN     "nomeReg" TEXT NOT NULL;
