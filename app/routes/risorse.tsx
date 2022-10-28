import { AnimatedBackground } from "~/components/backgrounds";

export default function Risorse() {
   return (
      <main className="min-h-screen min-w-screen">
         <AnimatedBackground
         title="risorse"
         array={[
            'Qui puoi trovare fonti, idee e risorse gratuite',
            'Scorri verso il basso per scoprire di più!'
         ]}/>
      </main>
   )
}