---

# JS-ARRAY-OBJECTS-CAROUSEL

## Descrizione

Il progetto **JS-Array-Objects-Carousel** ha come obiettivo la creazione di un carosello dinamico che mostra immagini, titoli e descrizioni. Utilizzando un array di oggetti letterali, ogni oggetto contiene un URL dell'immagine, un titolo e una descrizione. L'utente interagisce con il carosello tramite frecce per navigare tra le immagini e i contenuti. Il progetto include anche funzionalità di autoplay e ciclo infinito.

### Obiettivi del progetto

1. **MILESTONE 0**: 
   - Creare un carosello statico, inizialmente con un'immagine di esempio, e strutturare il markup per creare il container e l'immagine grande, preparandolo per la successiva gestione dinamica.

2. **MILESTONE 1**: 
   - Rimuovere i contenuti statici e utilizzare l'array di oggetti per popolare dinamicamente il carosello. Al clic sulle frecce verso destra o sinistra, l'immagine attiva diventa visibile e vengono aggiunti il titolo e la descrizione.

3. **MILESTONE 2**: 
   - Implementare il **ciclo infinito**: quando si è all'inizio o alla fine dell'array, il carosello ricomincia o prosegue al contrario. La miniatura selezionata dovrà essere aggiornata automaticamente.

4. **BONUS 1**: 
   - Aggiungere le **thumbnails**: mini immagini sotto l'immagine principale che permettono di selezionare direttamente l'immagine corrispondente al clic.

5. **BONUS 2**: 
   - Implementare l'**autoplay**: ogni 3 secondi, l'immagine attiva cambierà automaticamente alla successiva.

6. **BONUS 3**: 
   - Aggiungere i **bottoni di start/stop** per avviare e fermare l'autoplay, e un bottone per **invertire** il meccanismo di autoplay (passare dalla modalità sequenziale a quella inversa).

### Tecnologie Utilizzate

- **HTML5**: per la struttura della pagina, la creazione di container e la gestione dei contenuti.
- **CSS3**: per stilizzare la pagina e il carosello, comprese le miniatura, le immagini e i testi.
- **JavaScript**: per la logica del carosello, la gestione dell'interazione dell'utente, la manipolazione dei dati provenienti dall'array e la gestione delle funzionalità di autoplay.

### Struttura del Progetto

- `index.html`: La pagina principale dove viene creato il carosello con il markup iniziale.
- `style.css`: Il file CSS per la stilizzazione del carosello, delle miniature e dell'interfaccia.
- `script.js`: Il file contenente la logica per la gestione dinamica delle immagini, la navigazione, l'autoplay e il ciclo infinito.

---
