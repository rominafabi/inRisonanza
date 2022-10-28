import { AnimatedBackground } from "~/components/backgrounds";

export default function Servizi() {
   return (
      <main className="min-h-screen min-w-screen">
         <AnimatedBackground title="servizi" array={['Sei interessato ad una consulenza?', 'O ad un trattamento?','Scorri verso il basso per scoprire di più!']} />
      </main>
   )
}