import { useEffect, useState } from "react";
import {
   Navbar,
   MobileNav,
   Typography,
   Button,
   IconButton,
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
 } from "@material-tailwind/react";
import { NavLink } from "@remix-run/react";

export default function MyMenu() {
   const [openNav, setOpenNav] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   const showMenu = () => {
    setIsOpen(true);
   }
   
   const showOff = () => {
      setIsOpen(false)
   }
   
   useEffect(() => {
     window.addEventListener(
       "resize",
       () => window.innerWidth >= 960 && setOpenNav(false)
     );
   }, []);
  
   const navList = (
      <ul className="mb-4 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="h6"

          className="p-1 font-normal text-black lg:text-white"
        >
          <NavLink to="/" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")} end>
            Home
          </NavLink>
        </Typography>
        <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink to="/identita" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
          Identità
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink to="/servizi" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
          Servizi
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink to="/risorse" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
          Risorse
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink to="/donazioni" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
            Donazioni 
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink to="/contatti" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
            Contatti
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink to="/disclaimer" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
            Disclaimer
        </NavLink>
      </Typography>
    </ul>
  );

   return (
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:pt-4 lg:bg-transparent lg:border-none" blurred={false} shadow={false}>
         <NavLink
          prefetch="intent"
          to="/"
          className="hidden lg:block cursor-pointer py-1.5 font-normal"
         >
            <img src="/images/logo.png" alt="avatar" className="h-20 w-20 mx-auto"/>
         </NavLink>
      <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
         <div className="hidden lg:block">
            <ul className="mb-4 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
               <Typography
                  as="li"
                  variant="h6"
                  className="p-1 font-normal text-black lg:text-white"
                  >
                     <NavLink prefetch="intent" to="/" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                        Home
                     </NavLink>
               </Typography>
               <Typography
                  as="li"
                  variant="h6"
                  className="p-1 font-normal text-black lg:text-white"
                  >
                     <NavLink prefetch="intent" to="/identita" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                        Identità
                     </NavLink>
               </Typography>
               <Typography
                  as="li"
                  variant="h6"
                  className="p-1 font-normal text-black lg:text-white"
                  >
                     <NavLink prefetch="intent" to="/servizi" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                        Servizi
                     </NavLink>
               </Typography>

               <Typography
               as="li"
               onMouseEnter={showMenu}
               onMouseLeave={showOff}
               >  
                  <Menu
                  open={isOpen}
                  animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                  }}
                  >
                     <MenuHandler>
                        <Typography variant="h6" 
                        className="p-1 font-normal text-black lg:text-white">
                           <NavLink prefetch="intent" to="/risorse" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                              Risorse
                           </NavLink>
                        </Typography>
                     </MenuHandler>
                     <MenuList>
                        <Menu placement="right-start" offset={15}>
                           <MenuHandler>
                              <MenuItem className="hover:bg-[#79b73d]">Mazzi</MenuItem>
                           </MenuHandler>
                           <MenuList>
                              <MenuItem className="hover:bg-[#79b73d]">Oracoli</MenuItem>
                              <MenuItem className="hover:bg-[#79b73d]">Tarocchi</MenuItem>
                           </MenuList>
                        </Menu>
                        <MenuItem className="hover:bg-[#79b73d]">Circuiti Radionici</MenuItem>
                        <MenuItem className="hover:bg-[#79b73d]">Quadranti Radiestesici</MenuItem>
                        <MenuItem className="hover:bg-[#79b73d]">Stese</MenuItem>
                     </MenuList>
                  </Menu>
               </Typography>
               <Typography
                  as="li"
                  variant="h6"
                  className="p-1 font-normal text-black lg:text-white"
                  >
                  <NavLink prefetch="intent" to="/donazioni" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                     Donazioni
                  </NavLink>
               </Typography>
               <Typography
                  as="li"
                  variant="h6"
                  className="p-1 font-normal text-black lg:text-white"
                  >
                  <NavLink prefetch="intent" to="/contatti" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                     Contatti
                  </NavLink>
               </Typography>
               <Typography
                  as="li"
                  variant="h6"
                  className="p-1 font-normal text-black lg:text-white"
                  >
                  <NavLink prefetch="intent" to="/disclaimer" className={({ isActive }) => (isActive ? "flex items-center text-[#79b73d]" : "flex items-center hover:text-[#79b73d]")}>
                     Disclaimer
                  </NavLink>
               </Typography>
            </ul>
         </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
   )
}