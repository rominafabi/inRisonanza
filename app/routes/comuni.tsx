import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getProvList } from "~/models/comuni.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import MyMenu from "./menu";

export const meta: MetaFunction = () => {
   return {
     title: "Operatori Olistici per città",
   };
 };

 export async function loader({ request }: LoaderArgs) {
   const province = await getProvList();
   return json({province});
 }

export default function Province() {
/*    const data = useLoaderData(); */

   return (
      <main className="min-h-screen min-w-screen">
         <MyMenu />
         <Outlet />
      </main>
   )
}