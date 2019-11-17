# Demo
YouTube Demo: https://youtu.be/b9anQUH0tCA

Live Demo: https://webanwendung-client.herokuapp.com/

**Hinweis**: Diese App wird mit dem Free-Plan von Heroku gehostet, demnach kann es zu langen Ladezeiten kommen.

# A. Installationsanleitung

## A.1 Docker Installation

Meine Webanwendung kann mithilfe von Docker ausgeführt werden.

Docker benötigt im Hintergrund eine VM, um zu funktionieren. Bei Mac ist es HyperKit, bei Windows Hyper-V. Hyper-V ist nicht in allen Windows Versionen enthalten, somit unterscheidet sich das Installationsverfahren zwischen Betriebssystemen.

### Windows 10 64-Bit: **Pro**, **Enterprise**, **Education** sowie **MacOS**

1. Downloaden und installieren Sie [Docker-Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
2. Docker Desktop startet nach der Installation **nicht** automatisch. Um Docker Desktop zu starten, Suchen Sie nach Docker auf ihrem System und wählen Sie Docker Desktop in den Suchergebnissen.
3. Wenn der Wal in der Statusleiste sich nicht mehr bewegt läuft Docker erfolgreich.

    [](https://www.notion.so/1487536794d7400e8edf8690c76c2a23#5e650eec28f940888c623ce08d8d8a89)

4. Docker ist von jedem Terminal im System zugänglich.
5. Fahren Sie mit "A.2 Webanwendung ausführen (Docker Desktop)" fort.

### Windows Home und Systeme ohne Microsoft Hyper-V

1. Downloaden und installieren Sie [Docker Toolbox](https://github.com/docker/toolbox/releases)
2. Nach der Installation steht ein "Docker Quickstart Terminal" Icon auf dem Desktop zu Verfügung.
3. Starten Sie Docker-Toolbox über diese Verknüpfung.
4. Das Terminal führt verschiedene Schritte aus, um Docker Toolbox für Sie einzurichten. Wenn dies erledigt ist, zeigt das Terminal die `$` Eingabeaufforderung an.
5. Fahren Sie mit "A.3 Webanwendung ausführen (Docker Toolbox)" fort.

## A.2 Webanwendung ausführen (Docker Desktop)

1. Klonen sie das Projekt vom Github.

        git clone https://github.com/felixkeller98/webanwendung.git

2. Navigieren Sie in das webanwendung-Verzeichnis.

        cd webanwendung/

3. Führen Sie den Build-Befehl von docker-compose aus. Dies kann einige Minuten dauern.

        docker-compose build

4. Führen sie nun das Projekt aus.

        docker-compose up

5. Sobald Server, Client und Datenbank eingerichtet wurden, können Sie `[localhost:3000](http://localhost:3000)` im Browser aufrufen, um mit der Webanwendung zu interagieren.

## A.3 Webanwendung ausführen (Docker Toolbox)

1. Klonen sie das Projekt vom GitHub

        git clone https://github.com/felixkeller98/webanwendung.git

2. Navigieren Sie in das client-Verzeichnis

        cd webanwendung/client/

3. Öffnen Sie die package.json Datei in einem beliebigen Texteditor.
4. In der package.json, stellen Sie sicher, dass "proxy" entsprechend eingerichtet ist.

        "proxy": "http://192.168.99.100:9000",

5. Im Docker-Quickstart-Terminal, navigieren Sie in das webanwendung-Verzeichnis.
6. Führen Sie den Build-Befehl von docker-compose aus. Dies kann einige Minuten dauern.

        docker-compose build

7. Führen sie nun das Projekt aus.

        docker-compose up

8. Sobald Server, Client und Datenbank eingerichtet wurden, können Sie `192.168.99.100:3000` im Browser aufrufen, um mit der Webanwendung zu interagieren.
