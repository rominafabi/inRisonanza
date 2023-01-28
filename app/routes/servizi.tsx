import MainSection from "~/components/mainSection";

export default function Servizi() {
   return (
      <main className="min-h-screen min-w-screen">
         <MainSection title="Servizi degli Operatori" typeList={['Naturopatia', 'Tarologia e Cartomanzia', 'Pranoterapia', 'Medicina Tradizionale Cinese', 'Counseling', 'Ipnosi Regressiva ed altro ancora..','']}
         description="Scegli il servizio che più ti interessa e consulta l'elenco degli operatori disponibili per la prenotazione di un trattamento o di un consulto."
         />
      </main>
   )
}