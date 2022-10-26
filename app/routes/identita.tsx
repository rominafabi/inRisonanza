import { Typography } from "@material-tailwind/react";
import MyMenu from "./menu";
import Typewriter from "typewriter-effect"

export default function MyIdentity() {
   return (
      <main className="min-h-screen min-w-screen">
         <section className="min-h-screen max-h-screen min-w-screen relative">
            <div className="absolute z-10 w-full h-full flex flex-col">
               <MyMenu />
               <div className="w-full h-full flex flex-col items-center justify-center">
                  <Typography variant="h1" color="white" className="font-serif lg:text-7xl">
                     Identità
                  </Typography>
                  <Typography color="white" variant="paragraph" className="h-10 text-center">
            <Typewriter
              options={{
                delay : 40,
                strings: ['Ciao! Mi chiamo Romina.🍃', 'Vuoi sapere di più su di me?', 'Questa è la sezione giusta!'],
                autoStart: true,
                loop: true,
              }}
            />
            </Typography>
               </div>
            </div>
            <div className="absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-identita-background brightness-50">
            </div>
         </section>
      </main>
   )
}