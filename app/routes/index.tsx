import { Typography } from "@material-tailwind/react";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { useOptionalOperatore, useOptionalUser } from "~/utils";
import MyMenu from "./menu";
import Typewriter from "typewriter-effect"
import { SectionIdentita } from "~/components/home/identitaSection";
import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getOperatoreRoleRequest } from "~/session.server";

type LoaderData = {
  userRole: Awaited<ReturnType<typeof getOperatoreRoleRequest>>;
};

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const userRole = await getOperatoreRoleRequest(request)

  return json<LoaderData>({ userRole });
};


export default function Index() {
  const { userRole } = useLoaderData() as LoaderData;
  const user = useOptionalUser();
  const operator = useOptionalOperatore();

  console.log("user is: ",user);
  console.log("operator is: ",operator);

  return (
    <main className="min-h-screen min-w-screen bg-gray-900">
      <section className="min-h-screen max-h-screen min-w-screen relative bg-gray-900">
        <div className="absolute z-10 w-full h-full flex flex-col">
          <MyMenu role={userRole}/>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Typography variant="h1" className="font-serif lg:text-7xl" color="white">
            App Title
            </Typography>
            <Typography color="white" variant="paragraph" className="h-10">
            <Typewriter
              options={{
                delay : 40,
                strings: ['App Subtitle - 1', 'App Subtitle - 2 ','App Subtitle - 3'],
                autoStart: true,
                loop: true,
              }}
            />
            </Typography>
            {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                    >
                      View Notes for {user?.email} {userRole}
                    </Link>
                  ) : (
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="/join"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/registrazioneOperatore"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                        >
                        Sign as Operatore
                      </Link>
                      <Link
                        to="/login"
                        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                      >
                        Log In
                      </Link>
                      <Link
                        to="/loginOperatore"
                        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                      >
                        Log In Operatore
                      </Link>
                    </div>
                  )}
                  {operator ? (
                            <Form action="/logout" method="post">
                            <button
                              type="submit"
                              className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
                            >
                              Logout
                            </button>
                          </Form>
                  ) : (<h1 className="text-white">non operatore</h1>)}
          </div>
        </div>
        <div className="absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-main-background brightness-50">
        </div>
      </section>
      <SectionIdentita />
    </main>
  );
}
