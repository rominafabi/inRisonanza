import type { Role, Operatore, PasswordOperatore, Comune } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";

export type { Operatore } from "@prisma/client";

export async function getOperatoreById(id: Operatore["id"]) {
  return prisma.operatore.findUnique({ where: { id } });
}

export async function getOperatoreByEmail(email: Operatore["email"]) {
  return prisma.operatore.findUnique({ where: { email } });
}

export async function createOperatore(email: Operatore["email"], password: string , role : Role, comune: Comune["id"], cellulare: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.operatore.create({
    data: {
      email,
      role,
      cellulare,
      comuneId: comune,
      passwordOperatore: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
}

export async function deleteOperatoreByEmail(email: Operatore["email"]) {
  return prisma.operatore.delete({ where: { email } });
}

export async function verifyOperatoreLogin(
  email: Operatore["email"],
  password: PasswordOperatore["hash"]
) {
  const operatoreWithPassword = await prisma.operatore.findUnique({
    where: { email },
    include: {
      passwordOperatore: true,
    },
  });

  if (!operatoreWithPassword || !operatoreWithPassword.passwordOperatore) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    operatoreWithPassword.passwordOperatore.hash
  );

  if (!isValid) {
    return null;
  }

  const { passwordOperatore: _password, ...operatoreWithoutPassword } = operatoreWithPassword;

  return operatoreWithoutPassword;
}
