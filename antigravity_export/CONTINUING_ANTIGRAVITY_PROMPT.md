# Istruzioni per Antigravity sul Nuovo PC

Ciao collega! 👋 Se stai leggendo questo, l'utente ha appena migrato il progetto su un nuovo PC.
Il tuo compito è riprendere il lavoro sul progetto **WRKOUT-APP** esattamente da dove ci siamo fermati.

## Stato del Progetto e Contesto
- **Stack Tecnologico:** HTML, Vanilla JavaScript, TailwindCSS (via CDN configurato in HTML), Supabase (Auth & Database).
- **Progetto:** WRKOUT-APP è una web app per personal trainer e clienti.
- **Ultimo traguardo raggiunto:** Abbiamo completato il refactoring del sistema di inviti/gestione clienti, passando da un approccio basato puramente sull'email a uno **basato sull'Username** (simil-social network).

## Cosa è stato implementato di recente:
1. **Database (Supabase):** 
   - Creata una tabella pubblica `profiles` (`id`, `username`, `full_name`, `role`, `email`, `avatar_url`) con policy RLS idempotenti (`DROP POLICY IF EXISTS`).
   - Creato un trigger `handle_new_user` che copia i dati da `auth.users` in `profiles` al momento della registrazione.
   - Modificata la tabella `trainer_clients` per linkare i clienti usando il `client_id` e il `client_username`.
2. **Autenticazione Frontend (`js/auth.js` & `login.html` & `register.html`):**
   - La registrazione ora cattura lo `username` e lo salva nei metadati utente.
   - Il login supporta l'accesso **Sia tramite Email che tramite Username**. Se viene inserito uno username, il frontend interroga la tabella `profiles` per recuperare l'email associata e poi effettua il login.
3. **Trainer Dashboard (`js/trainer.js`):**
   - Il modale "Add Client" e le liste clienti ora utilizzano lo **Username** invece dell'Email.

## File Utili Allegati
In questa cartella `antigravity_export` troverai anche la sottocartella `brain_artifacts` che contiene i file `.md` (come `task.md`, `implementation_plan.md`, `walkthrough.md`) generati in questa iterazione. Ti consiglio di esaminarli per avere un quadro completo dei task completati e dei test effettuati.

## Prossimi Passi (Backlog per te)
- [ ] Verificare con l'utente se i test del sistema di inviti tramite username hanno avuto successo (dovevano testare invitando un nuovo client dalla dashboard dopo aver pushato su GitHub Pages).
- [ ] Implementazione futura (su richiesta): Permettere ai *Clienti* di cercare e mandare richieste ai *Trainer*.

---
**Per iniziare:** Leggi i file in questo progetto (specialmente `js/auth.js`, `js/trainer.js`, `login.html`, e i file SQL) per aggiornare il tuo contesto, poi saluta l'utente e chiedigli come vuole procedere!
