import { AnimatedBackground } from "~/components/backgrounds";

export default function MyIdentity() {
   return (
      <main className="min-h-screen min-w-screen">
         <AnimatedBackground title="identita" array={['Ciao! Mi chiamo Romina.🍃', 'Vuoi sapere di più su di me?', 'Questa è la sezione giusta!']} />
      </main>
   )
}