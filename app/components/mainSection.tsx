import Typewriter from "typewriter-effect"

export default function MainSection(data:any) {
   
   return (
      <section className="lg:h-[calc(100vh-80px)] h-[calc(100vh-56px)] min-w-screen relative">
      <div className="absolute z-10 w-full h-full flex flex-col">
         <div className="w-full h-full flex flex-col items-center justify-center py-4">
            {/* TITOLO PAGINA */}
            <h1 className="lg:text-6xl text-2xl text-white font-semiBold uppercase">
               {data.title}
            </h1>
            {/* PROVINCIE LIST & TYPEWRITER*/}
            <h5 className="h-10 text-center lg:text-3xl text-2xl text-white font-semiBold my-2">
               <Typewriter
               options={{
                  delay : 40,
                  strings: data.typeList,
                  autoStart: true,
                  loop: true,
                  cursor: ".",
               }}
               />
            </h5>
            {/* BOX DESCRIZIONE */}
            <p className="text-normal font-openSans text-white w-3/4 text-center">
               {data.description}
            </p>
         </div>
         {/* OPERATOR PNG */}
         <div className="absolute bottom-0 w-full">
            <img src="/images/logo/operator.png" alt="operatore" className="w-60 mx-auto"/>
         </div>
      </div>
      {/* OPERATOR ABSOLUTE BG */}
      <div className="absolute w-full h-full z-0 bg-fixed bg-cover bg-center bg-no-repeat bg-main">
      </div>
   </section>
   )
}