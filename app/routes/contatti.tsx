import { AnimatedBackground } from "~/components/backgrounds";

export default function MyIdentity() {
   return (
      <main className="min-h-screen min-w-screen">
         <AnimatedBackground title="contatti" array={['Necessiti di informazioni?','Scopri i miei contatti ed i miei socials.']} />
      </main>
   )
}