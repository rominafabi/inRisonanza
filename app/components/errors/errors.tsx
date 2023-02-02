import { Link } from "@remix-run/react";

export default function NotFoundComponent(data: any) {
   return (
      <section className="relative lg:h-[calc(100vh-80px)] h-[calc(100vh-56px)] w-full bg-main">
      <div className="flex h-full w-full flex-col items-center justify-center py-4">
        <h1 className="font-semiBold text-2xl uppercase text-white lg:text-6xl">
          {data.error}
        </h1>
        <p className="text-normal w-3/4 p-4 text-center font-openSans text-white">
         {data.description}
        </p>
        <Link to={data.buttonLink} className="px-6 py-4 bg-white text-main font-semiBold rounded border-white border-2 hover:bg-main hover:text-white">
          {data.buttonText}
        </Link>
        <div className="absolute bottom-0 w-full">
            <img src={data.errorPic} alt="operatore" className="w-60 mx-auto"/>
         </div>
      </div>
    </section>
   )
}