import type { LoaderArgs, MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import NotFoundComponent from "~/components/errors/errors";

import { getComune } from "~/models/comuni.server";
import { getServicesInTheAreaByComuneId } from "~/models/servizi.server";

export async function loader({ params }: LoaderArgs) {
  invariant(params.comuneId, "comuneId not found");

  const comune = await getComune(params.comuneId);
  if (!comune) {
    throw new Error("Il Comune non esiste");
  }
  const servizi = await getServicesInTheAreaByComuneId(params.comuneId);

  return json({ comune, servizi });
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
    title: `Operatori di ${data.comune.nome}`,
  };

};

export default function ComunePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h3 className="text-2xl font-bold">{data.comune.nome}</h3>
      <p className="py-6">{data.comune.nomeProv}</p>
      <hr className="my-4" />
      {data.servizi.map((servizio) => (
          <ul key={servizio.denominazione}>
            <li>{servizio.denominazione}</li>
          </ul>
        ))}
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
    
    <section className="relative lg:h-[calc(100vh-80px)] h-[calc(100vh-56px)] w-full bg-main">
       <NotFoundComponent 
    buttonLink="/comuni"
    buttonText="Operatori nel tuo Comune"
    errorPic="/images/logo/notfound.png"
    error={error.message}
    description="Uh Oh! Il comune che stai cercando non esiste o non è disponibile. Puoi visionare gli operatori disponibili nel tuo comune cliccando il bottone qui in basso!" />
  
      <div className="flex h-full w-full flex-col items-center justify-center py-4">
        <h1 className="font-semiBold text-2xl uppercase text-white lg:text-6xl">
          {error.message}
        </h1>
        <p className="text-normal w-3/4 p-4 text-center font-openSans text-white">
          Uh Oh! Il comune che stai cercando non esiste o non è disponibile. Puoi visionare gli operatori disponibili in base alle province cliccando sul bottone qui in basso!
        </p>
        <Link to="/province" className="px-6 py-4 bg-white text-main font-semiBold rounded border-white border-2 hover:bg-main hover:text-white">
          Operatori nelle Province
        </Link>
        <div className="absolute bottom-0 w-full">
            <img src="/images/logo/notfound.png" alt="operatore" className="w-60 mx-auto"/>
         </div>
      </div>
    </section>
  );
}
