# Exercice 1 - HTTP

## Objectif

Utiliser l'API HTTP de NodeJS pour créer un petit serveur web.

## Énoncé

Importer l'API HTTP dans un nouveau fichier JavaScript.

> https://nodejs.org/api/http.html

Créer le serveur grâce à la fonction `createServer` qui écoutera sur le port `5000`.

Renvoyer une réponse lorsqu'on appelle le serveur ayant le code HTTP 200 et le contenu `<h1>Welcome to my node server</h1>`

Ajouter un console log apres la définition du serveur afin de savoir quand il est correctement démarré
et si il ne crash ou pas.

> Appeler le serveur depuis le navigateur, via cURL ou postman

**Résultat attendu**

Dans le navigateur le texte `Welcome to my node server` devrait être affiché.

Sur Postman ou cURL une chaîne de caractère `<h1>Welcome to my node server</h1>` devrait être renvoyée.
