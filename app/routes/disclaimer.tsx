import { Typography } from "@material-tailwind/react";
import MyMenu from "./menu";

export default function Disclaimer() {
   return (
      <main className="min-h-screen min-w-screen">
         <section className="min-h-screen max-h-screen min-w-screen relative">
            <div className="absolute z-10 w-full h-full flex flex-col">
               <MyMenu />
               <div className="w-full h-full flex items-center justify-center">
                  <Typography variant="h1" color="white" className="font-serif lg:text-7xl">
                     Disclaimer
                  </Typography>
               </div>
            </div>
            <div className="absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-disclaimer-background brightness-50">
            </div>
         </section>
      </main>
   )
}