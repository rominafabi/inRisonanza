import type { LoaderArgs, MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getServicesInTheAreaByProvinciaId } from "~/models/servizi.server";


export async function loader({ params }: LoaderArgs) {
   invariant(params.provincia, "provincia not found");
   const provinciaSigla = params.provincia.toLowerCase();

   const servizi = await getServicesInTheAreaByProvinciaId(params.provincia!.toUpperCase());
 
   return json({ servizi, provinciaSigla });
 }

export default function ProvinciaSecondIndexRoute() {
   const data = useLoaderData<typeof loader>();
   return (
      <div>
      {data.servizi.map((servizio) => (
         <ul key={servizio.denominazione}>
            <Link to={`/province/${data.provinciaSigla}/${servizio.id}`}>
               <li className="font-openSans text-lg">{servizio.denominazione}</li>
            </Link>
         </ul>
       ))}
       </div>
   )
}