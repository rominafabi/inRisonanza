import { Link } from "@remix-run/react";

export default function ComuniIndexPage() {
  return (
   <section className="min-h-screen min-w-screen relative bg-main">
      <p>
      Nessun comune selezionato. Cerca un comune, o {" "}
      <Link to="/province" className="text-blue-500 underline">
        visualizza le provincie
      </Link>
    </p>
   </section>
  );
}


