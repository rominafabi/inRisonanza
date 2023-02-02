import type { ActionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createOperatoreSession } from "~/session.server";

import { createOperatore, getOperatoreByEmail } from "~/models/operatore.server";
import { safeRedirect, validateEmail } from "~/utils";
import type { Comune, Role } from "@prisma/client";
import { getComuniList } from "~/models/comuni.server";
import { faker } from "@faker-js/faker";

export async function loader() {
  const comuni = await getComuniList();
  return json({comuni});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const comune = formData.get("comune");
  const telefono = faker.phone.number();
  const userIs : Role = "PENDING";
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  console.log("comune tipo:", typeof comune?.toString())

  if (!validateEmail(email)) {
    return json(
      { errors: { comune: null, email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { comune: null, email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { comune: null, email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  if(!comune || undefined) {
    return json(
      { errors: {email: null, password: null, comune: "Nessun comune selezionato" }},
      { status: 400}
    )
  }

  const existingUser = await getOperatoreByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
          comune: null,
        },
      },
      { status: 400 }
    );
  }

  console.log("role is:", typeof role);

  const operatore = await createOperatore(email, password, userIs, comune?.toString(), telefono);

  return createOperatoreSession({
    request,
    operatoreId: operatore.id,
    operatoreRole: operatore.role,
    remember: false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Registrazione Operatore",
  };
};

export default function RegistrazioneOperatoreRoute() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const comuneRef = React.useRef<HTMLSelectElement>(null);
  const data = useLoaderData();

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    } else if (actionData?.errors?.comune) {
      comuneRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <h1 className="font-sans mx-auto text-4xl font-medium p-4 text-gray-700">
         Crea il tuo profilo da operatore
      </h1>
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="comune"
              className="block text-sm font-medium text-gray-700"
            >
              Comune
            </label>
            <div className="mt-1">
              <select
                id="select"
                name="comune"
                ref={comuneRef}
                aria-invalid={actionData?.errors?.comune ? true : undefined}
                aria-describedby="comune-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              >
                <option value={undefined}> </option>
                {data.comuni.map((comune : Comune) => (
                  <option value={comune.id} key={comune.id}>
                      {`${comune.nome} (${comune.sigla})`}
                  </option>
                ))}
              </select>
              {actionData?.errors?.comune && (
               <div className="pt-1 text-red-700" id="comune-error">
                  {actionData.errors.comune}
               </div>
              )}
            </div>
          </div>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Hai già un account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/login/operatore",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
