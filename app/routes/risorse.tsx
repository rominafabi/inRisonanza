import { Typography } from "@material-tailwind/react";
import MyMenu from "./menu";
import Typewriter from "typewriter-effect"

export default function Risorse() {
   return (
      <main className="min-h-screen min-w-screen">
         <section className="min-h-screen max-h-screen min-w-screen relative">
            <div className="absolute z-10 w-full h-full flex flex-col">
               <MyMenu />
               <div className="w-full h-full flex flex-col items-center justify-center">
                  <Typography variant="h1" color="white" className="font-serif lg:text-7xl">
                     Risorse Gratuite
                  </Typography>
                  <Typography color="white" variant="paragraph" className="h-10 text-center">
                     <Typewriter
                     options={{
                        delay : 40,
                        strings: ['Qui puoi trovare fonti, idee e risorse gratuite','Scorri verso il basso per scoprire di più!'],
                        autoStart: true,
                        loop: true,
                     }}
                     />
                  </Typography>
               </div>
            </div>
            <div className="absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-risorse-background brightness-50">
            </div>
         </section>
      </main>
   )
}