Esempio di come implementare, in un sito in php, un token CSRF: PARTE 2

Questo esempio integra quanto già visto nell'esempio descritto nell'articolo
https://www.webarea.it/howto/php/come-prevenire-attacchi-csrf-in-php_247
i cui file sono scaricabili da git hub qui
https://github.com/giuliodb/token-csrf

In questo esempio, superiamo una limitazione dell'esempio precedente.
Nell'articolo precedente prevedeva infatti che postassimo tutti i campi del form, senza selezionarli, senza cambiarne il nome, senza aggiunta di nuovi parametri.
Questo esempio invece si applica a tutte le chimate AJAX POST, intercettandole ed inserendo automaticamente il token CSRF.

Per maggiori info leggi l'articolo
https://www.webarea.it/howto/php/come-prevenire-attacchi-csrf-in-php-parte-2_248