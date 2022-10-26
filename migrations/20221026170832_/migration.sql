/*
  Warnings:

  - You are about to drop the column `name` on the `Frame` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Frame_name_key";

-- AlterTable
ALTER TABLE "Frame" DROP COLUMN "name";
