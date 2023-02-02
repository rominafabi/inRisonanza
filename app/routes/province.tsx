import { Outlet } from "@remix-run/react";
import MyMenu from "./menu";

export default function Province() {
   return (
      <main className="min-h-screen min-w-screen">
         <MyMenu />
         <Outlet />
      </main>
   )
}