# Portfolio Frontend

Un portfolio personale moderno costruito con Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologie Utilizzate

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Libreria per animazioni
- **ESLint** - Linting del codice

## 📁 Struttura del Progetto

```
src/
├── app/                 # App Router di Next.js
│   ├── layout.tsx      # Layout principale
│   └── page.tsx        # Homepage
├── components/         # Componenti React
│   ├── Navigation.tsx  # Barra di navigazione
│   └── Hero.tsx        # Sezione hero
├── data/              # Dati statici
│   ├── projects.ts    # Progetti portfolio
│   └── skills.ts      # Competenze
├── lib/               # Utilities e costanti
│   └── constants.ts   # Configurazioni
├── types/             # Tipi TypeScript
│   └── index.ts       # Definizioni tipi
└── styles/            # Stili personalizzati
```

## 🛠️ Setup e Sviluppo

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Apri il browser:**
   Naviga su [http://localhost:3000](http://localhost:3000)

## 📝 Personalizzazione

### Configurazione Base
Modifica `src/lib/constants.ts` per personalizzare:
- Nome e titolo del sito
- Descrizione e metadati
- Link social
- Navigazione

### Dati Portfolio
Aggiorna i file in `src/data/`:
- `projects.ts` - I tuoi progetti
- `skills.ts` - Le tue competenze

### Styling
Personalizza i colori e lo stile in:
- `src/app/globals.css` - Stili globali
- Componenti individuali per stili specifici

## 🎨 Componenti Disponibili

- **Navigation** - Barra di navigazione responsive
- **Hero** - Sezione di presentazione principale

## 📱 Responsive Design

Il portfolio è completamente responsive e ottimizzato per:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Prossimi Passi

- [ ] Aggiungere sezione About
- [ ] Implementare pagina Projects
- [ ] Creare sezione Contact
- [ ] Aggiungere animazioni avanzate
- [ ] Implementare dark mode
- [ ] Ottimizzare SEO
