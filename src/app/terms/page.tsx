import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { legalConfig } from "@/lib/legalConfig";
import React from "react";

/**
 * Pagina Termini d'Uso
 * Definisce le condizioni di utilizzo del sito.
 * Personalizza questo testo secondo le esigenze del tuo sito.
 */

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Termini e Condizioni d’Uso</h1>
        <p>
          L’accesso e l’utilizzo di questo sito sono soggetti ai seguenti termini e condizioni. Utilizzando il sito, l’utente accetta integralmente i presenti termini.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Proprietà intellettuale</h2>
        <p>
          Tutti i contenuti presenti su questo sito (testi, immagini, loghi, ecc.) sono di proprietà di {legalConfig.companyName} o dei rispettivi titolari e sono protetti dalle leggi sul diritto d’autore.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Limitazioni di responsabilità</h2>
        <p>
          Il titolare non è responsabile per eventuali danni derivanti dall’uso del sito o da informazioni in esso contenute.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Modifiche ai termini</h2>
        <p>
          I termini possono essere modificati in qualsiasi momento. L’utente è tenuto a consultarli periodicamente.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Legge applicabile</h2>
        <p>
          I presenti termini sono regolati dalla legge di {legalConfig.country}.
        </p>
      </main>
      <Footer />
    </div>
  );
}
