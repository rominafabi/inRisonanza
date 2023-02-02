/*
  Warnings:

  - The primary key for the `Comune` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codiceProvCom` on the `Comune` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Comune` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Operatore" DROP CONSTRAINT "Operatore_comuneId_fkey";

-- AlterTable
ALTER TABLE "Comune" DROP CONSTRAINT "Comune_pkey",
DROP COLUMN "codiceProvCom",
DROP COLUMN "slug",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Comune_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Comune_id_seq";

-- AlterTable
ALTER TABLE "Operatore" ALTER COLUMN "comuneId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Operatore" ADD CONSTRAINT "Operatore_comuneId_fkey" FOREIGN KEY ("comuneId") REFERENCES "Comune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
