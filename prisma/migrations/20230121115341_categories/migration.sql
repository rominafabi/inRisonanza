/*
  Warnings:

  - You are about to drop the column `profilePageId` on the `Social` table. All the data in the column will be lost.
  - You are about to drop the `CategoriesOnProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfilePage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `operatoreId` to the `Social` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnProfile" DROP CONSTRAINT "CategoriesOnProfile_categoriaIds_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnProfile" DROP CONSTRAINT "CategoriesOnProfile_profilePageId_fkey";

-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_profilePageId_fkey";

-- AlterTable
ALTER TABLE "Social" DROP COLUMN "profilePageId",
ADD COLUMN     "operatoreId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'UTENTE';

-- DropTable
DROP TABLE "CategoriesOnProfile";

-- DropTable
DROP TABLE "ProfilePage";

-- CreateTable
CREATE TABLE "_CategoriaToOperatore" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToOperatore_AB_unique" ON "_CategoriaToOperatore"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToOperatore_B_index" ON "_CategoriaToOperatore"("B");

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriaToOperatore" ADD CONSTRAINT "_CategoriaToOperatore_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriaToOperatore" ADD CONSTRAINT "_CategoriaToOperatore_B_fkey" FOREIGN KEY ("B") REFERENCES "Operatore"("id") ON DELETE CASCADE ON UPDATE CASCADE;
