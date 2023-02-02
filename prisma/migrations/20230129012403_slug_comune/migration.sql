/*
  Warnings:

  - Added the required column `slug` to the `Comune` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comune" ADD COLUMN     "slug" TEXT NOT NULL;
