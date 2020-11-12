# src folder

Hier befindet sich die Node.js application.
Diese besteht nur aus einem Express Server der bei jedem Request "Hello\n" zurückgibt.

## test folder

Hier befinden sich die Tests für die application.
Im passing.test.ts file befinden sich alle tests, welche den build nicht stören sollten.
Im failing.test.ts file befinden sich alle tests, welche den build stören sollten.

# azure-pipeline.yml

Diese file befindet sich im root folder.
Hier werden folgende Tasks/Scripts in folgender Reihenfolge abgearbeitet.

1. Install Node.js
2. npm install and build
3. Copy package.json
4. Copy build files
5. Publish artifact