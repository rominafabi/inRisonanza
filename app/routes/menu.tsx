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
import { Form, NavLink } from "@remix-run/react";
import { useOptionalOperatore, useOptionalUser } from "~/utils";


export default function MyMenu(data: any) {
  const operator = useOptionalOperatore();
  const user = useOptionalUser();

  const [openNav, setOpenNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [colorDropDown, setColorDropDown] = useState("white");
  const [colorDropDown2, setColorDropDown2] = useState("white");
  const [classDropDown, selectClassDropDown] = useState("rotate-[-90deg]");
  const [classDropDown2, selectClassDropDown2] = useState("rotate-[-90deg]");
  const [hoveringStat, setHoveringStat] = useState(false);
  const [hoveringStat2, setHoveringStat2] = useState(false);
  const active: string =
    "flex items-center text-main bg-white py-2 px-6 rounded group [&>*]:fill-main font-semiBold";
  const notActive: string =
    "flex items-center hover:text-main hover:bg-white py-2 px-6 rounded group font-semiBold";
  const activeSubClass: string = "hover:bg-[#02c3a5] hover:text-white";

  const showMenu = () => {
    setIsOpen(true);
    setHoveringStat(true);
    setColorDropDown2("#627282");
    selectClassDropDown2("");
  };

  const showOff = () => {
    setIsOpen(false);
    setHoveringStat(false);
    setColorDropDown2("white");
    selectClassDropDown2("rotate-[-90deg]");
  };

  const showMenu2 = () => {
    setIsOpen2(true);
    setHoveringStat2(true);
    setColorDropDown("#627282");
    selectClassDropDown("");
  };

  const showOff2 = () => {
    setIsOpen2(false);
    setHoveringStat2(false);
    setColorDropDown("white");
    selectClassDropDown("rotate-[-90deg]");
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const city = [
    {
      Id: 1,
      Nome: "Roma",
      Link: "/province/rm"
    },
    {
      Id: 2,
      Nome: "Milano",
      Link: "/province/mi"
    },
    {
      Id: 3,
      Nome: "Torino",
      Link: "/province/to"
    },
    {
      Id: 4,
      Nome: "Napoli",
      Link: "/province/na"
    },
    {
      Id: 5,
      Nome: "Bologna",
      Link: "/province/bo"
    },
    {
      Id: 6,
      Nome: "Firenze",
      Link: "/province/fi"
    },
    {
      Id: 7,
      Nome: "Venezia",
      Link: "/province/ve"
    },
    {
      Id: 8,
      Nome: "Genova",
      Link: "/province/ge"
    },
    {
      Id: 9,
      Nome: "L'Aquila",
      Link: "/province/aq"
    }
  ]

  const navList = (
    <ul className="mb-4 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#79b73d]"
              : "flex items-center hover:text-[#79b73d]"
          }
          end
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink
          to="/servizi"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#79b73d]"
              : "flex items-center hover:text-[#79b73d]"
          }
        >
          Servizi
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink
          to="/citta"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#79b73d]"
              : "flex items-center hover:text-[#79b73d]"
          }
        >
          Città
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="w-full max-w-full rounded-none bg-[#02C3A5] py-2 px-4 lg:border-none lg:py-0"
      blurred={false}
      shadow={false}
    >
      {/* NAVIGAZIONE DESKTOP */}
      <div className="container mx-auto flex items-center text-blue-gray-900">

        <NavLink
          prefetch="intent"
          to="/"
          className="mx-4 hidden cursor-pointer font-normal lg:block"
        >
          <img
            src="/images/logo/inrisonanza.png"
            alt="avatar"
            className="mx-auto h-20 w-auto"
          />
        </NavLink>

        <div className="hidden lg:flex grow">
          <ul className="my-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">

            {/* HOME */}
            <Typography
              as="li"
              variant="h6"
              className="p-1 font-normal text-black lg:text-white"
            >
              <NavLink
                prefetch="intent"
                to="/"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Home
              </NavLink>
            </Typography>
            {/* SERVIZI */}
            <Typography as="li" onMouseEnter={showMenu} onMouseLeave={showOff}>
              <Menu
                open={isOpen}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <Typography
                    variant="h6"
                    className="p-1 font-normal text-black lg:text-white"
                  >
                    <NavLink
                      prefetch="intent"
                      to="/Servizi"
                      className={({ isActive }) =>
                        isActive || hoveringStat ? active : notActive
                      }
                    >
                      Servizi
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        fill={colorDropDown2}
                        className={classDropDown2}
                      >
                        <path d="M10 12 6 8h8Z" />
                      </svg>
                    </NavLink>
                  </Typography>
                </MenuHandler>
                <MenuList>
                  {/*                   <Menu placement="right-start" offset={15}>
                    <MenuHandler>
                      <MenuItem className={activeSubClass}>Mazzi</MenuItem>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem className={activeSubClass}>Oracoli</MenuItem>
                      <MenuItem className={activeSubClass}>Tarocchi</MenuItem>
                    </MenuList>
                  </Menu> */}
                  <NavLink to="/operatori/Reiki" className="outline-transparent">
                    <MenuItem className={activeSubClass}>Reiki</MenuItem>
                  </NavLink>
                  <NavLink to="/operatori/Tarologia" className="outline-transparent">
                    <MenuItem className={activeSubClass}>Tarologia</MenuItem>
                  </NavLink>
                  <NavLink to="/operatori/Cartomanzia" className="outline-transparent">
                    <MenuItem className={activeSubClass}>Cartomanzia</MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </Typography>
            {/* CITTA / PROVINCE */}
            <Typography
              as="li"
              onMouseEnter={showMenu2}
              onMouseLeave={showOff2}
            >
              <Menu
                open={isOpen2}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <Typography
                    variant="h6"
                    className="p-1 font-normal text-black lg:text-white"
                  >
                    <NavLink
                      prefetch="intent"
                      to="/province"
                      className={({ isActive }) =>
                        isActive || hoveringStat2 ? (active) : (notActive)
                      }
                    >
                      Città
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        fill={colorDropDown}
                        className={classDropDown}
                      >
                        <path d="M10 12 6 8h8Z" />
                      </svg>
                    </NavLink>
                  </Typography>
                </MenuHandler>
                <MenuList>
                  {
                    city.map((citta) => (
                  <NavLink to={citta.Link} className="outline-transparent" key={citta.Id}>
                    <MenuItem className={activeSubClass}>
                      {citta.Nome}
                    </MenuItem>
                  </NavLink>
                    ))
                  }
                  <NavLink to="/province" className="outline-transparent">
                    <MenuItem className={activeSubClass}>
                      Vedi Tutte...
                    </MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </Typography>

          </ul>
          
        </div>
        {/* CONTENITORE LOGIN USER / OPERATORE*/}
        {operator && (
          <Form action="/logout" method="post">
            <button type="submit" className="rounded bg-white py-2 px-6 text-main hover:text-hearth active:bg-white">
              Logout
            </button>
          </Form>
          )}
        {!operator && !user && (
          <div className="flex gap-2">
          <NavLink to="/login/operatore" className="rounded bg-white py-2 px-6 text-main hover:text-hearth">
            Sei un Operatore?
          </NavLink>
          <NavLink to="/login" className="rounded bg-white py-2 px-6 text-main hover:text-hearth">
            Accedi
          </NavLink>
          </div>
        )}
        {user && (
          <Form action="/logout" method="post">
          <button type="submit" className="rounded bg-white py-2 px-6 text-main hover:text-hearth active:bg-white">
            Logout
          </button>
        </Form>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="white"
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
              fill="white"
              stroke="white"
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
      {/* NAVIGAZIONE MOBILE */}
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
