import { NavLink } from "@remix-run/react"

export function NavButton(data : any) {
   const route = data.route
   const buttonText = data.text
   return (
      <NavLink to={route} className="duration-300 w-full md:w-min text-center uppercase px-6 py-2 border-2 border-main bg-main font-openSans text-white text-md rounded hover:bg-white hover:text-main">
         {buttonText}
      </NavLink>
   )
}

export function SubmitButton(data: any) {
   const buttonText = data.text
   return (
      <button type="submit" className="duration-300 flex-1 px-6 py-2 border-2 border-main bg-main text-semiBold text-white text-md rounded hover:bg-white hover:text-main">
         {buttonText}
      </button>
   )
}

export default { NavButton, SubmitButton }