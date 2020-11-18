# Teil 1

Um Wordpress zu verwenden einfach *docker-compose up* in dem Teil 1 Ordner ausführen.
Man kann auch ein *-d* an den command anhängen, damit man die selbe console weiter verwenden kann.
Dann muss man jedoch den Prozess mit *docker-compose down* beenden und kann nicht einfach *CTRL-C* verwenden.
Danach sollte Docker alles wichtige installieren.
Wenn die Installation fertig ist, dann kann man über den Port 8000 auf Wordpress zugreifen.

# Teil 2

Bei der *docker-compose.yaml* Datei gilt wieder das selbe wie bei Teil 1.
Hier kann man jedoch mit *--build* die Images nur bauen.
Sie werden aber standartmäßig beim ersten Aufruf automatisch gebaut.