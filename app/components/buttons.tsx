import { Typography } from "@material-tailwind/react"
import { NavLink } from "@remix-run/react"

export function NavButton(data : any) {
   const route = data.route
   const buttonText = data.text
   return (
      <NavLink to={route} className="py-3 px-20 bg-black rounded-xl text-white border-2 border-black hover:bg-white hover:text-black transition duration-300">
         <Typography>{buttonText}</Typography>
      </NavLink>
   )
}

export default { NavButton }