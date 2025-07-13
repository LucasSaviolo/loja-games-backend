/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `Jogo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Jogo_titulo_key` ON `Jogo`(`titulo`);
