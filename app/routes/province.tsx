import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getProvList } from "~/models/comuni.server";
import { useLoaderData } from "@remix-run/react";
import ProvinciaList from "~/components/provinciaList";
import MainSection from "~/components/mainSection";

export const meta: MetaFunction = () => {
   return {
     title: "Operatori Olistici per città",
   };
 };

 export async function loader({ request }: LoaderArgs) {
   const province = await getProvList();
   return json({province});
 }

export default function Province() {
   const data = useLoaderData();

   return (
      <main className="min-h-screen min-w-screen">
         <MainSection title="Operatori nelle province" typeList={['Roma', 'Milano', 'Torino', 'Napoli', 'Bologna', 'Firenze', 'Aosta', 'In tutta Italia']}
         description="Scegli la provincia che ti interessa e consulta l'elenco degli operatori disponibili per la prenotazione di un trattamento o di un consulto."
         />
         {/* SECTION OF PROVINCE */}
         <ProvinciaList province={data.province} />
      </main>
   )
}