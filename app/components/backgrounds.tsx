import { Typography } from "@material-tailwind/react"
import MyMenu from "~/routes/menu"
import Typewriter from "typewriter-effect"

export function SimpleBackground (data : any) {
   const titolo : string = data.title
   return (
      <section className="min-h-screen max-h-screen min-w-screen relative">
      <div className="absolute z-10 w-full h-full flex flex-col">
         <MyMenu />
         <div className="w-full h-full flex items-center justify-center">
            <Typography variant="h1" color="white" className="font-serif lg:text-7xl capitalize">
               {titolo}
            </Typography>
         </div>
      </div>
      <div className={`absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-${titolo}-background brightness-50`}>
      </div>
   </section>
   )
}

export function AnimatedBackground (data: any) {
   const title : string = data.title;
   const letters : [] = data.array;

   return (
      <section className="min-h-screen max-h-screen min-w-screen relative">
         <div className="absolute z-10 w-full h-full flex flex-col">
            <MyMenu />
            <div className="w-full h-full flex flex-col items-center justify-center">
               <Typography variant="h1" color="white" className="font-serif lg:text-7xl capitalize">
                  {title}
               </Typography>
               <Typography color="white" variant="paragraph" className="h-10 text-center">
                  <Typewriter
                  options={{
                     delay : 40,
                     strings: letters,
                     autoStart: true,
                     loop: true,
                  }}
                  />
               </Typography>
            </div>
         </div>
         <div className={`absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-${title}-background brightness-50`}>
         </div>
      </section>
   )
} 

export default { SimpleBackground  }