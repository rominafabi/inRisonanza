import MainSection from "~/components/mainSection";
import ProvinciaList from "~/components/provinciaList";
import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getProvList } from "~/models/comuni.server";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
   const province = await getProvList();
   return json({province});
 }

 export const meta: MetaFunction = () => {
   return {
     title: "Operatori Olistici per città",
   };
 };

export default function ProvinceIndexRoute() {
   const data = useLoaderData();
   return (
      <>
         <MainSection title="Operatori nelle province" typeList={['Roma', 'Milano', 'Torino', 'Napoli', 'Bologna', 'Firenze', 'Aosta', 'In tutta Italia']}
         description="Scegli la provincia che ti interessa e consulta l'elenco degli operatori disponibili per la prenotazione di un trattamento o di un consulto."
         />
         {/* SECTION OF PROVINCE */}
         <ProvinciaList province={data.province} />
      </>
   )
}