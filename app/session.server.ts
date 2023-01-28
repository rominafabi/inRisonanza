import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import type { Role } from "@prisma/client";
import type { User } from "~/models/user.server";
import type { Operatore } from "~/models/operatore.server";
import { getUserById } from "~/models/user.server";
import { getOperatoreById } from "~/models/operatore.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const USER_SESSION_KEY = "userId";
const USERROLE_SESSION_KEY = "role";
const OPERATORE_SESSION_KEY = "operatoreId";


export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserId(
  request: Request
): Promise<User["id"] | undefined> {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
export async function getOperatoreId(
  request: Request
): Promise<Operatore["id"] | undefined> {
  const session = await getSession(request);
  const userId = session.get(OPERATORE_SESSION_KEY);
  return userId;
}

export async function getUserInformations(
  request: Request
) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return {userId}
}

export async function getOperatoreInformations(
  request: Request
) {
  const session = await getSession(request);
  const operatoreId = session.get(OPERATORE_SESSION_KEY);
  const operatoreRole = session.get(USERROLE_SESSION_KEY);
  return {operatoreId, operatoreRole}
}


export async function getOperatoreRoleRequest(
  request: Request
): Promise<Operatore["role"] | undefined> {
  const session = await getSession(request);
  const userRole = session.get(USERROLE_SESSION_KEY);
  return userRole;
}
 

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (userId === undefined) return null;

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function getOperatore(request: Request) {
  const operatoreId = await getOperatoreId(request);
  if (operatoreId === undefined) return null;

  const operatore = await getOperatoreById(operatoreId);
  if (operatore) return operatore;

  throw await logout(request);
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function requireOperatoreId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const operatoreId = await getOperatoreId(request);
  if (!operatoreId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return operatoreId;
}

export async function requireUser(request: Request) {
  const userId = await requireUserId(request);

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function requireOperatore(request: Request) {
  const operatoreId = await requireOperatoreId(request);

  const operatore = await getOperatoreById(operatoreId);
  if (operatore) return operatore;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userId,
  remember,
  redirectTo,
}: {
  request: Request;
  userId: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function createOperatoreSession({
  request,
  operatoreId,
  operatoreRole,
  remember,
  redirectTo,
}: {
  request: Request;
  operatoreId: string;
  operatoreRole: Role;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(OPERATORE_SESSION_KEY, operatoreId);
  session.set(USERROLE_SESSION_KEY, operatoreRole);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
