import type { LoaderArgs, MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink, Outlet, useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import NotFoundComponent from "~/components/errors/errors";

import { getProvinceByRegion, getProvincia } from "~/models/comuni.server";
import { getServicesInTheAreaByProvinciaId } from "~/models/servizi.server";

export async function loader({ params }: LoaderArgs) {
  invariant(params.provincia, "provincia not found");

  const provincia = await getProvincia(params.provincia!.toUpperCase());
  const provincieNellaRegione = await getProvinceByRegion(provincia?.codReg!);
  if (!provincia) {
    throw new Error("La Provincia non esiste");
  }
  const servizi = await getServicesInTheAreaByProvinciaId(params.provincia!.toUpperCase());

  return json({ provincia, servizi, provincieNellaRegione });
}

export const meta: MetaFunction<typeof loader> = ({
  data
}) => {

  if(!data){
    return {
      title: "Comune Inesistente"
    }
  }
  return {
    title: `Servizi nella Provincia di ${data.provincia.nomeProv}`,
  };

};

export default function ComunePage() {
  const data = useLoaderData<typeof loader>();
  const activeClassName = "w-max font-openSans text-lg py-2 px-6 border-2 border-main bg-white text-main rounded text-center hover:bg-white hover:text-main"
  const standardClassName = "w-max font-openSans text-lg py-2 px-6 border-2 border-main bg-main text-white rounded text-center hover:bg-white hover:text-main"

  return (
    <section className="w-full h-full flex justify-center items-center p-1 md:px-4 flex-col">
      <div className="bg-secondary rounded-xl w-full h-full my-2 p-2">
        <div className="bg-white drop-shadow-lg shadow-inner rounded-xl">
          <h1 className="text-3xl lg:text-5xl font-semiBold p-2 lg:p-4 text-center uppercase text-blue-gray-700">Provincia di {data.provincia.nomeProv}</h1>
          <hr />
          <p className="text-md lg:text-lg font-openSans p-2 lg:p-4 text-center text-blue-gray-500 lg:w-3/4 w-full mx-auto">
            Di seguito puoi consultare l'elenco degli Operatori nella provincia di {data.provincia.nomeProv}, attualmente disponibili per la prenotazione online di un trattamento o di altri tipi di lavori.
            <br /> Quale operatore <strong className="font-semiBold">ti risuona</strong> di più? Scegline uno qui sotto!
            <br/><br /><strong className="font-semiBold">N.B. </strong>Ti ricordiamo che il nostro è un <strong className="font-semiBold">SERVIZIO GRATUITO.</strong>
          </p>
        </div>
      </div>
      <div className="bg-secondary rounded-xl w-full h-full my-2 px-2">
        <Outlet />
      </div>
      <div className="bg-secondary rounded-xl w-full h-full my-2 px-2 pb-4 pt-2 gap-2 flex flex-row justify-center items-center flex-wrap">
        <h2 className="font-semiBold text-blue-gray-700 text-2xl w-full text-center py-2">Altre province nella Regione {data.provincia.nomeReg}</h2>
        <p className="text-blue-gray-700 text-center font-md pb-2 w-full">Qui sotto ci sono tutte le province della regione <strong className="font-semiBold">{data.provincia.nomeReg}</strong>. Puoi consultare i servizi disponibili ed i vari operatori nella zona.</p>
      {data.provincieNellaRegione.map((province) => (
          <ul key={province.sigla} >
            <NavLink to={`/province/${province.sigla.toLowerCase()}`}>
            {({ isActive }) => (
              <li className={isActive ? activeClassName : standardClassName}>
                {province.nome}
              </li>
            )}
            </NavLink>
          </ul>
        ))}
      </div>
    </section>
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
