import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { legalConfig } from "@/lib/legalConfig";
import React from "react";

/**
 * Pagina Privacy Policy
 * Spiega come vengono trattati i dati personali degli utenti.
 * Personalizza questo testo secondo le esigenze del tuo sito.
 */

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto py-8 px-4 my-6 mb-81">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>
            La presente informativa descrive le modalità di gestione del sito in riferimento al trattamento dei dati personali degli utenti che lo consultano, ai sensi del Regolamento UE 2016/679 (GDPR).
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Titolare del trattamento</h2>
        <p>
            Il titolare del trattamento è {legalConfig.companyName}, contattabile all’indirizzo email {legalConfig.companyEmail}.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Tipi di dati raccolti</h2>
        <ul className="list-disc ml-6">
            <li>Dati di navigazione (indirizzo IP, browser, ecc.)</li>
            <li>Dati forniti volontariamente (moduli di contatto, email, ecc.)</li>
            <li>Cookie e tecnologie simili</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Finalità del trattamento</h2>
        <ul className="list-disc ml-6">
            <li>Rispondere a richieste e fornire servizi</li>
            <li>Analisi statistiche anonime</li>
            <li>Adempiere a obblighi di legge</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Diritti dell’utente</h2>
        <p>
            Gli utenti possono esercitare i diritti previsti dagli articoli 15-22 del GDPR (accesso, rettifica, cancellazione, limitazione, opposizione, portabilità) scrivendo a {legalConfig.companyEmail}.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Modifiche</h2>
        <p>
            La presente informativa può essere aggiornata. Si consiglia di consultarla periodicamente.
        </p>
        </main>
        <Footer />
    </div>
  );
}
