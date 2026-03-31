# SEO e indicizzazione Google - checklist operativa

Questa checklist copre i passaggi da fare dopo il deploy su Vercel per apparire nelle ricerche Google.

## 1) Variabili ambiente in Vercel (Production)

Imposta queste variabili nel progetto Vercel:

- `NEXT_PUBLIC_SITE_URL=https://zoriography.com`
- `GOOGLE_SITE_VERIFICATION=<token_search_console>`
- `BING_SITE_VERIFICATION=<token_bing>` (opzionale)
- `NEXT_PUBLIC_SITE_UPDATED_AT=2026-03-31` (opzionale, aggiorna quando cambi contenuti importanti)

Poi fai un nuovo deploy in Production.

## 2) Verifica tecnica rapida

Con il deploy live:

- `https://zoriography.com/robots.txt` deve rispondere con `Allow: /` in production
- `https://zoriography.com/sitemap.xml` deve essere raggiungibile
- controlla che gli URL canonici usino `https://zoriography.com`

## 3) Google Search Console

1. Aggiungi la proprieta `zoriography.com` in Search Console (consigliata proprieta Domain).
2. Completa la verifica proprieta (via DNS o meta tag).
3. Invia sitemap: `https://zoriography.com/sitemap.xml`.
4. Usa "Controllo URL" e richiedi indicizzazione per:
   - `https://zoriography.com/`
   - `https://zoriography.com/portfolio`
   - `https://zoriography.com/chi-sono`
   - `https://zoriography.com/contatti`

## 4) Cosa aspettarsi

- L'indicizzazione non e immediata: puo richiedere giorni o settimane.
- I risultati migliorano con aggiornamenti reali dei contenuti e link esterni di qualita.

## 5) Note progetto

- La pagina `/acquista` e configurata `noindex` finche non sara completa.
- Le preview deployment Vercel restano non indicizzabili.
