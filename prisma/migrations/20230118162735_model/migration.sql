-- CreateTable
CREATE TABLE "Operatore" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'UTENTE',

    CONSTRAINT "Operatore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordOperatore" (
    "hash" TEXT NOT NULL,
    "operatoreId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Operatore_email_key" ON "Operatore"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordOperatore_operatoreId_key" ON "PasswordOperatore"("operatoreId");

-- AddForeignKey
ALTER TABLE "PasswordOperatore" ADD CONSTRAINT "PasswordOperatore_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE CASCADE ON UPDATE CASCADE;
