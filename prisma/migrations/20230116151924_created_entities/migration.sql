-- CreateEnum
CREATE TYPE "Role" AS ENUM ('UTENTE', 'ADMIN', 'OPERATORE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'UTENTE';

-- CreateTable
CREATE TABLE "ProfilePage" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL DEFAULT '',
    "nominativo" TEXT NOT NULL,
    "Sottotitolo" TEXT NOT NULL,
    "Biografia" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL DEFAULT '000-000-0000',
    "indirizzo" TEXT NOT NULL,

    CONSTRAINT "ProfilePage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regione" (
    "id" SERIAL NOT NULL,
    "nomeRegione" TEXT NOT NULL,
    "profilePageId" INTEGER NOT NULL,

    CONSTRAINT "Regione_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comune" (
    "id" TEXT NOT NULL,
    "regioneId" INTEGER NOT NULL,

    CONSTRAINT "Comune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnProfile" (
    "profilePageId" INTEGER NOT NULL,
    "categoriaIds" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Social" (
    "id" TEXT NOT NULL,
    "nameOfSocial" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "profilePageId" INTEGER,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePage_userId_key" ON "ProfilePage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Regione_nomeRegione_key" ON "Regione"("nomeRegione");

-- CreateIndex
CREATE UNIQUE INDEX "Regione_profilePageId_key" ON "Regione"("profilePageId");

-- CreateIndex
CREATE UNIQUE INDEX "Comune_regioneId_key" ON "Comune"("regioneId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnProfile_profilePageId_key" ON "CategoriesOnProfile"("profilePageId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnProfile_categoriaIds_key" ON "CategoriesOnProfile"("categoriaIds");

-- AddForeignKey
ALTER TABLE "ProfilePage" ADD CONSTRAINT "ProfilePage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Regione" ADD CONSTRAINT "Regione_profilePageId_fkey" FOREIGN KEY ("profilePageId") REFERENCES "ProfilePage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comune" ADD CONSTRAINT "Comune_regioneId_fkey" FOREIGN KEY ("regioneId") REFERENCES "Regione"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnProfile" ADD CONSTRAINT "CategoriesOnProfile_profilePageId_fkey" FOREIGN KEY ("profilePageId") REFERENCES "ProfilePage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnProfile" ADD CONSTRAINT "CategoriesOnProfile_categoriaIds_fkey" FOREIGN KEY ("categoriaIds") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_profilePageId_fkey" FOREIGN KEY ("profilePageId") REFERENCES "ProfilePage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
