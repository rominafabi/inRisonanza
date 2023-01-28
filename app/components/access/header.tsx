import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import { NavLink } from "@remix-run/react";
import { IconaHome, IconaProduttore, IconaUtente } from "../icons/icons";

export default function HeaderNav(data: any){
   const active: string = "bg-green-500 p-1 w-min h-min rounded-lg ";
   const notActive: string =
     "bg-cyan-500 p-1 w-min h-min rounded-lg hover:bg-green-500";
   return(
      <header className="h-20 w-full gap-2 border-b-2">
        <div
          className="flex h-full w-full flex-row-reverse items-center gap-2 px-2 md:w-4/5 lg:mx-auto"
        >
          <div className="flex gap-2">
            <Popover>
              <PopoverHandler>
                <NavLink to={data.toOperatore} prefetch="intent">
                  {({ isActive }) => (
                    <button className={isActive ? active : notActive}>
                      <IconaProduttore fill="white" />
                    </button>
                  )}
                </NavLink>
              </PopoverHandler>
              <PopoverContent>{data.operatorePopover}</PopoverContent>
            </Popover>
            <Popover>
              <PopoverHandler>
                <NavLink to={data.toUser} prefetch="intent" end>
                  {({ isActive }) => (
                    <button className={isActive ? active : notActive}>
                      <IconaUtente fill="white" />
                    </button>
                  )}
                </NavLink>
              </PopoverHandler>
              <PopoverContent>{data.userPopover}</PopoverContent>
            </Popover>
          </div>
          <div className="grow">
            <Popover>
              <PopoverHandler>
                <NavLink to="/" prefetch="intent">
                  {({ isActive }) => (
                    <button className={isActive ? active : notActive}>
                      <IconaHome fill="white" />
                    </button>
                  )}
                </NavLink>
              </PopoverHandler>
              <PopoverContent>Torna alla Home</PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
   )
}