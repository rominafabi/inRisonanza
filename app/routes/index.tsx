import { Button, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import MyMenu from "./menu";
import Typewriter from "typewriter-effect"
import { NavButton } from "~/components/buttons";
import { SectionIdentita } from "~/components/home/identitaSection";


export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="min-h-screen min-w-screen bg-gray-900">
      <section className="min-h-screen max-h-screen min-w-screen relative bg-gray-900">
        <div className="absolute z-10 w-full h-full flex flex-col">
          <MyMenu />
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Typography variant="h1" className="font-serif lg:text-7xl" color="white">
            Romina Fabi
            </Typography>
            <Typography color="white" variant="paragraph" className="h-10">
            <Typewriter
              options={{
                delay : 40,
                strings: ['Consulente', 'Operatrice Bioenergetica','Ricercatrice Spirituale'],
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
                      View Notes for {user.email}
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
                        to="/login"
                        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
                      >
                        Log In
                      </Link>
                    </div>
                  )}
          </div>
        </div>
        <div className="absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-main-background brightness-50">
        </div>
      </section>
{/*       <section className="bg-white min-h-screen max-h-screen min-w-screen flex justify-center flex-col">
        <div className="flex justify-center pt-4">
          <Typography variant="h2" className="lg:text-5xl">
            Identità
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center h-full">
          <div className="flex flex-col lg:my-auto py-2 px-4 items-center">
            <img src="/images/rominafabi.jpeg" alt="logo romina fabi" className="rounded-full drop-shadow-lg h-40 w-40 mx-auto lg:h-80 lg:w-80"/>
            <Typography variant="h4" className="text-center pt-2 lg:text-3xl">Biografia</Typography>
            <Typography className="py-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
            <NavButton route="/identita" text="Scopri di più"/>
          </div>
          <div className="flex flex-col lg:my-auto py-2 px-4 items-center">
            <img src="/images/logo.png" alt="logo romina fabi" className="rounded-full drop-shadow-lg h-40 w-40 mx-auto lg:h-80 lg:w-80"/>
            <Typography variant="h4" className="text-center pt-2 lg:text-3xl">Logo</Typography>
            <Typography className="py-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
            <NavButton route="/identita" text="Scopri di più"/>
          </div>
        </div>
      </section> */}
      <SectionIdentita />
    </main>
  );
}
