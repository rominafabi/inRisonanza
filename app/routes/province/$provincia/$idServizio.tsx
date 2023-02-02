import { Input } from "@material-tailwind/react";
import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, useCatch, useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import NotFoundComponent from "~/components/errors/errors";
import { IconaComune, IconaOperatorSearch, IconaOrderByPrice1, IconaPosition, IconaSortByAtoZ, IconaSortByNewest, IconaSortByZtoA } from "~/components/icons/icons";
import Pagination from "~/components/pagination/pagination";
import { getComuneListByProv, getProvincia } from "~/models/comuni.server";
import {
  getOperatorsByProvinciaSiglaAndIdServizio,
  getServizio,
} from "~/models/servizi.server";

const PER_PAGE = 12;

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.provincia, "provincia not found");
  invariant(params.idServizio, "servizio not found");
  const provinciaSigla = params.provincia.toUpperCase();
  const provincia = await getProvincia(provinciaSigla);
  const idServizio = Number(params.idServizio);
  const comuni = await getComuneListByProv(provinciaSigla);

    const servizi = await getServizio(idServizio);

    console.log(servizi);
  if (!servizi) {
   throw new Error("Il Servizio non esiste");
 }

  const url = new URL(request.url);
  const query = url.searchParams;
  const currentPage = Math.max(Number(query.get("page") || 1), 1);
  const sort = query.get("sort") || "null";

  const options: {
    take?: number;
    skip?: number;
    where?: { id?: { contains?: string; mode?: "insensitive" }, idComune?:{contains?: string; mode?:"insensitive"} };
  } = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE,
  };

  const countOptions: {
    where?: { id?: { contains?: string; mode?: "insensitive" }, idComune?:{contains?: string; mode?:"insensitive"} };
  } = {};

  if (query.get("search")) {
    options.where = {
      id: {
        contains: query.get("search")!,
        mode: "insensitive",
      },
    };
    countOptions.where = options.where;
  }

  if (query.get("searchComune")) {
   options.where = {
     idComune: {
       contains: query.get("searchComune")!,
       mode: "insensitive",
     },
   };
   countOptions.where = options.where;
 }


  const operators = await getOperatorsByProvinciaSiglaAndIdServizio(
    provinciaSigla,
    idServizio,
    options,
    sort
  );




  return json({ provinciaSigla, servizi, operators, provincia,comuni });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return {
      title: "Comune Inesistente",
    };
  }
  return {
    title: `${data.servizi?.denominazione} nella provincia di ${data.provincia?.nomeProv}`,
  };
};

export default function RouteServizioProvincia() {
  const { provinciaSigla, servizi, operators, provincia,comuni } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const [operatori, setOperatori] = useState(operators.operatorsWithService);
  const count = operators.countOperatorsWithService;
  const totalPages = Math.ceil(count / PER_PAGE);
  const servizioId = servizi?.id;
  const [ activeSortAZ, setActiveSortAZ ] = useState(false);
  const [ activeSortZA, setActiveSortZA ] = useState(false);
  const [ activeSortNewest, setActiveSortNewest] = useState(false);
  const activeClassNavLink = "w-full duration-300 text-xs font-openSans flex flex-row justify-center items-center gap-2 px-6 py-2 bg-white rounded text-main border-2 border-main hover:bg-white hover:text-main";
  const defaultClassNavLink = "w-full duration-300 text-xs font-openSans flex flex-row justify-center items-center gap-2 px-6 py-2 bg-main rounded text-white border-2 border-main hover:bg-white hover:text-main";
  const nameAscOrder = new URLSearchParams(searchParams);
  nameAscOrder.set("sort", "asc");

  const nameDescOrder = new URLSearchParams(searchParams);
  nameDescOrder.set("sort", "desc");

  const nullOrder = new URLSearchParams(searchParams);
  nullOrder.set("sort", "null");

  const recentOrder = new URLSearchParams(searchParams);
  recentOrder.set("sort", "recent");

  useEffect(() => {
   console.log("setting old array");
   setOperatori(operators.operatorsWithService);
  },[operators.operatorsWithService])

  return (
    <div>
      <div className="flex flex-row gap-2">   
   {/* FILTER SECTION */}
         <section className="hidden lg:flex w-full flex-col items-center lg:w-2/6">
      { /* CONTAINER OF ELEMENTS BG-WHITE */}
            <div className="my-2 w-full sticky top-2 rounded-xl bg-white p-4 text-left shadow-inner drop-shadow-lg">
      { /* CERCA OPERATORE: TEXT SECTION */}
               <h1 className="px-2 font-semiBold text-3xl text-blue-gray-700 py-2">
                  Cerca Operatore: 
               </h1>
               <hr className="pb-2"/>
               <p className="text-sm py-2 px-2 font-openSans text-blue-gray-500">
               Cerca operatori attraverso il nominativo nella provincia di <strong className="font-semiBold">
                   {provincia?.nomeProv} ({provinciaSigla})
               </strong>.
               </p>
      {/* SEARCH OPERATORE BY NAME */}
               <Form className="flex flex-row px-2 w-full items-center gap-2 rounded bg-white py-2">
                  <Input
                  name="search"
                  label="Cerca Operatore..."
                  id="searchlg"
                  defaultValue={searchParams.get("search") || ""}
                  className="flex-grow"
                  />
                  <button type="submit" className="group duration-300 w-min px-2 py-2 border-2 border-main bg-main text-semiBold text-white text-md rounded hover:bg-white hover:text-main">
                     <IconaOperatorSearch fill="fill-white group-hover:fill-main" />
                  </button>
               </Form>
      { /* ORDINA: TEXT SECTION */}
               <hr className="mt-3"/>
               <h1 className="px-2 font-semiBold text-3xl text-blue-gray-700 pb-2 pt-1">
                  Ordina: 
               </h1>
               <hr className="pb-2"/>
               <p className="text-xs py-1 px-2 font-openSans text-blue-gray-500">
               Ordina il risultato della ricerca attraverso questi bottoni, potrai ordinarli in ordine alfabetico, visualizzare i nuovi operatori che si sono registrati su <strong className="font-semiBold">inRisonanza</strong>, ordinare per prezzo crescente o decrescente e vedere gli operatori con le <strong className="font-semiBold">
               recensioni maggiori.
               </strong>.
               </p>
      {/* ORDER OF OPERATORI BY ALPHA */}
               <div className="flex flex-row gap-2 px-2 my-2">
                  <NavLink to={`?${nameAscOrder.toString()}`} className={activeSortAZ ? (activeClassNavLink) : (defaultClassNavLink)} onClick={() => { setActiveSortAZ(true); setActiveSortZA(false); setActiveSortNewest(false) }}>
                     <IconaSortByAtoZ />A-Z
                  </NavLink>
                  <NavLink to={`?${nameDescOrder.toString()}`} className={activeSortZA ? (activeClassNavLink) : (defaultClassNavLink)} onClick={() => { setActiveSortZA(true); setActiveSortAZ(false); setActiveSortNewest(false) }}>
                     <IconaSortByZtoA />Z-A
                  </NavLink>
               </div>
      {/* ORDER OF OPERATORI BY NEWEST */}
               <div className="flex flex-row gap-2 px-2 my-2">
                  <NavLink to={`?${recentOrder.toString()}`} className={activeSortNewest ? (activeClassNavLink) : (defaultClassNavLink)} onClick={() => { setActiveSortNewest(true); setActiveSortZA(false); setActiveSortAZ(false) }}>
                     <IconaSortByNewest />Nuovi Operatori
                  </NavLink>
               </div>
      {/* SELECT COMUNE TO FILTER */}
                  <hr className="mt-3"/>
                     <h1 className="px-2 font-semiBold text-3xl text-blue-gray-700 pb-2 pt-1">
                        Filtra: 
                     </h1>
                  <hr className="pb-2"/>
                  <p className="text-xs py-1 px-2 font-openSans text-blue-gray-500">
                  Seleziona un comune all'interno della provincia di {provincia?.nomeProv} per visualizzare gli operatori che svolgono un {servizi?.denominazione}.
                  </p>
                  <Form className="mt-1 flex px-2 gap-2">
                  <select
                     id="searchComune"
                     name="searchComune"
                     aria-describedby="comune-error"
                     defaultValue={searchParams.get("searchComune") || ""}
                     className="w-full rounded border px-2 border-blue-gray-500 text-sm font-openSans text-blue-gray-500"
                  >
                     <option value={undefined}> </option>
                     {comuni.map((comune) => (
                        <option value={comune.id} key={comune.id}>
                           {`${comune.nome} (${comune.sigla})`}
                        </option>
                     ))}
                  </select>
                  <button type="submit" className="group duration-300 w-[40px] px-2 py-2 border-2 border-main bg-main text-semiBold text-white text-md rounded hover:bg-white hover:text-main">
                     <IconaComune />
                  </button>
                  </Form>
            </div>
         </section>

   {/* MAIN SECTION FOR OPERATORI */}
         <section className="flex w-full flex-col items-center">
         {/* CONTAINER OF DESCRIPTION FOR OPERATORI IN THE REGION */}
            <div className="my-2 w-full rounded-xl bg-white p-4 text-left shadow-inner drop-shadow-lg">
               {operatori.length !== 0 ? (
               <h1 className="font-semiBold text-3xl text-blue-gray-700 py-2">
                  Operatori Disponibili
               </h1>):(
               <h1 className="font-semiBold text-3xl text-blue-gray-700 py-2">
                  Operatori non Disponibili
               </h1>
               )}
               <hr />
               <p className="text-sm py-2 font-openSans text-blue-gray-500">
               Vi sono in totale:
               <strong className="font-semiBold">
                  {" "}
                  {count} Operatori Disponibili
               </strong>{" "}
               che praticano{" "}
               <strong className="font-semiBold">
                  {servizi?.denominazione}
               </strong>{" "}
               nella provincia di{" "}
               <strong className="font-semiBold">
                  {provincia?.nomeProv} ({provinciaSigla})
               </strong>
               </p>
            </div>
   {/* CONTAINER OF ORDER OPERATORI */}
            <div className="sticky top-2 rounded-xl drop-shadow-lg bg-white w-full mb-2 z-10 lg:hidden">
   {/* ORDER RESULTS CONTAINER*/}
               <div className="w-full flex flex-row flex-wrap-reverse gap-2 px-4 py-4">
   {/* ORDER BY ALPHA AND NEWEST */}
                  <NavLink to={`?${nameAscOrder.toString()}`} className="w-[40px] flex flex-row justify-center items-center gap-2 rounded group border-2 border-main bg-main px-2 py-2 text-white hover:bg-white hover:text-main"><IconaSortByAtoZ fill="fill-white group-hover:fill-main" /></NavLink>
                  <NavLink to={`?${nameDescOrder.toString()}`} className="w-[40px] flex flex-row justify-center items-center gap-2 rounded group border-2 border-main bg-main px-2 py-2 text-white hover:bg-white hover:text-main"><IconaSortByZtoA fill="fill-white group-hover:fill-main" /></NavLink>
                  <NavLink to={`?${recentOrder.toString()}`} className="w-min flex flex-row justify-center items-center gap-2 rounded group border-2 border-main bg-main px-2 py-2 text-white hover:bg-white hover:text-main"><IconaSortByNewest fill="fill-white group-hover:fill-main" /></NavLink>
                  <button className="w-[40px] flex flex-row justify-center items-center gap-2 rounded group border-2 border-main bg-main px-2 py-2 text-white hover:bg-white hover:text-main"><IconaOrderByPrice1 fill=""></IconaOrderByPrice1></button>
   {/* SEARCH OF OPERATORI */}
                  <Form className="w-full md:w-min items-center gap-2 rounded bg-white flex sm:flex-grow">
                     <Input
                     name="search"
                     label="Cerca nominativo..."
                     id="search"
                     defaultValue={searchParams.get("search") || ""}
                     className="flex-grow"
                     />
                     <button type="submit" className="group duration-300 w-min px-2 py-2 border-2 border-main bg-main text-semiBold text-white text-md rounded hover:bg-white hover:text-main">
                        <IconaOperatorSearch fill="fill-white group-hover:fill-main" />
                     </button>
                  </Form>
               </div>
            </div>
   {/* CONTAINER OF OPERATORI ARRAY */}
            <div className="mt-0 h-min w-full rounded-xl bg-white p-4 drop-shadow-lg z-0 flex flex-col justify-center items-center">
               {operatori.map((operatore) => (
               <div
                  className="my-4 flex h-min w-full flex-col items-center gap-4 rounded-xl bg-white lg:p-5 p-4 shadow-inner drop-shadow-lg duration-300 hover:scale-105 hover:drop-shadow-xl lg:flex-row"
                  key={operatore.id}
               >
                  <Link to={`/${operatore.id}/${operatore.pagina?.id}`} className="lg:w-3/5 flex flex-col lg:flex-row items-center gap-4 group">
                     <img
                     src={operatore.pagina?.profilePic}
                     alt={`${operatore.email} profile`}
                     className="w-32 rounded-xl drop-shadow-lg duration-300 group-hover:scale-110 "
                     />
                     <div className="group flex flex-col lg:align-top">
                     <h3 className="text-center font-openSansBold text-2xl text-blue-gray-800 duration-300 group-hover:text-main lg:text-left">
                        {operatore.pagina?.nome} {operatore.pagina?.cognome}
                     </h3>
                     <h5 className="py-2 md:py-1 text-center font-openSans text-sm text-blue-gray-500 duration-300 group-hover:text-main lg:text-left">
                        {operatore.pagina?.titolo}
                     </h5>
                     </div>
                  </Link>
                  <div className="flex flex-col flex-wrap justify-center lg:w-1/5 gap-2">
                     <div className="py-2 flex w-full flex-col items-center lg:w-full lg:justify-center align-center">
                        <Link to={`/servizi/${servizi?.id}`}>
                           <h5 className="font-openSansBold text-sm text-blue-gray-800 duration-300 hover:text-main text-center w-full">
                              {servizi?.denominazione}
                           </h5>
                        </Link>
                        <Link to={`/comuni/${operatore.comuneId}`} className="group">
                        <h4 className="flex items-center font-semiBold text-sm text-blue-gray-700 duration-300 hover:text-main">
                           <IconaPosition
                              fill={
                              "duration-300 fill-blue-gray-700 group-hover:fill-main"
                              }
                           />{" "}
                           {operatore?.comune.nome}{" "}
                        </h4>
                        </Link>
                     </div>
                     <h3 className="font-openSansBold text-2xl text-blue-gray-700 items-center w-full flex justify-center">
                        {(operatore.servizi.find(
                        (servizio) => servizio.servizioId === servizioId
                        ) &&
                        operatore.servizi.find(
                           (servizio) => servizio.servizioId === servizioId
                        )?.prezzo) ||
                        "N/A"}€
                     </h3>
                  </div>
                  <NavLink to={`/${operatore.id}`} className="duration-300 w-full lg:w-1/5 text-center uppercase px-2 py-2 border-2 border-main bg-main font-openSans text-white text-sm rounded hover:bg-white hover:text-main">
                     prenota
                  </NavLink>
               </div>
               ))}
               {operatori.length === 0 && (
                  <h4 className="font-semiBold text-xl text-center text-blue-gray-700">Attualmente non ci sono Operatori che svolgono {servizi?.denominazione}</h4>
               )}
            </div>
         </section>
      </div>
      {operatori.length !== 0 && (
      <p>
        Visualizzando {operators.operatorsWithService.length} elementi su{" "}
        {count}
      </p>
      )}
      {totalPages > 1 && (<Pagination totalPages={totalPages} pageParam="page" />)}
    </div>
  );
}

export function CatchBoundary() {
   const caught = useCatch();
 
   if (caught.status === 404) {
     return <div>Uh oh! Il comune non esiste!</div>;
   }
   throw new Error(`Unsupported thrown response status code: ${caught.status}`);
 }

export function ErrorBoundary({ error }: { error: Error }) {

   console.error(error);
 
   return (
     <NotFoundComponent 
     buttonLink="/province"
     buttonText="Operatori nelle Province"
     errorPic="/images/logo/notfound.png"
     error={error.message}
     description="Uh Oh! La provincia che stai cercando non esiste o non è disponibile. Puoi visionare gli operatori disponibili in base alle province cliccando sul bottone qui in basso!" />
   );
 }
