interface Provincia {
   nomeProv: string;
   sigla: string;
 }

export default function ProvinciaList(data: any) {
   const province : Provincia[] = data.province;
   const containerClass = "w-full h-full bg-[#d8ebe8] p-4 rounded-xl flex flex-col flex-wrap items-start items-stretch";
   const secondContainerClass = "w-full h-min shrink flex-auto";
   const letterClass = "text-white text-lg bg-main rounded px-2 my-2 font-semiBold";
   const provinciaClass = "px-6 text-[#1a2734] font-openSans";

   const filterProvincesByLetter = (provinces: Provincia[], letter: string) => {
      return provinces.filter(province => province.nomeProv.startsWith(letter));
    }

   return (
      <section className="h-full w-screen max-w-screen relative bg-white p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className={containerClass}>
      {["A", "B", "C"].map(letter => (
         <div key={letter} className={secondContainerClass}>
            <h5 className={letterClass}>{letter}</h5>
            <ul>
            {filterProvincesByLetter(province, letter).map(provincia => (
               <li key={provincia.sigla} className={provinciaClass}>{provincia.nomeProv}</li>
            ))}
            </ul>
         </div>
      ))}
      </div>
      <div className={containerClass}>
         {["E", "F", "G", "I", "L", "M"].map(letter => (
         <div key={letter} className={secondContainerClass}>
            <h5 className={letterClass}>{letter}</h5>
            <ul>
            {filterProvincesByLetter(province, letter).map(provincia => (
               <li key={provincia.sigla} className={provinciaClass}>{provincia.nomeProv}</li>
            ))}
            </ul>
         </div>
      ))}
      </div>
      <div className={containerClass}>
         {["N", "O", "P", "R"].map(letter => (
         <div key={letter} className={secondContainerClass}>
            <h5 className={letterClass}>{letter}</h5>
            <ul>
            {filterProvincesByLetter(province, letter).map(provincia => (
               <li key={provincia.sigla} className={provinciaClass}>{provincia.nomeProv}</li>
            ))}
            </ul>
         </div>
      ))}
      </div>
      <div className={containerClass}>
         {["S", "T", "U", "V"].map(letter => (
         <div key={letter} className={secondContainerClass}>
            <h5 className={letterClass}>{letter}</h5>
            <ul>
            {filterProvincesByLetter(province, letter).map(provincia => (
               <li key={provincia.sigla} className={provinciaClass}>{provincia.nomeProv}</li>
            ))}
            </ul>
         </div>
      ))}
      </div>
   </section>
   )
}