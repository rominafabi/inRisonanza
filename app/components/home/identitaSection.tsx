import { Typography } from "@material-tailwind/react"
import { useRef, useState } from "react"
import { NavButton } from "../buttons"

export function SectionIdentita() {
   const [position , setPosition] = useState("0")
   const ref = useRef();

   const scrollFunc = (e:any) => {
      if(position === "0"){
         setPosition("full")
      }/* else if(position === "full"){
         setPosition("0")
      } */
   }

   return (
      <section className="h-screen w-screen max-w-screen max-h-screen bg-gray-900">
         <img src="/images/rominafabi.jpeg" alt="logo romina fabi" className={`transition delay-150 duration-300 translate-x-${position} rounded-full drop-shadow-lg h-40 w-40 lg:h-80 lg:w-80`}
         onScroll={scrollFunc}
         />
      </section>
   )
}

export default { SectionIdentita }