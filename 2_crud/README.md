# CRUD

## Objectif

Créer un CRUD (Create, Read, Update, Delete) à l'aide de NodeJS, Express et MongoDB

## Pré-requis

Avoir installé :

- [NodeJS](https://nodejs.org/en/)
- `NPM`
- [MongoDB](https://www.mongodb.com/try/download/community)
- `Mongo Compass` ("phpmyadmin" pour MongoDB)
- [Postman](https://www.postman.com/) ou `cURL` (pour tester les routes)

## Énoncé

### 1. Get Started

#### a. Initialisation

Initialiser un nouveau projet à l'aide de NPM.

Installer avec NPM la liste des paquets suivants :

- express
- body-parser
- mongoose

Installer en tant que dépendence de developpement :

- nodemon

Ajouter nouveau script nommé `start` à votre `package.json` afin de lancer plus simplement le projet en faisant
`npm start`

#### b. Création du serveur

Créer un nouveau serveur avec Express et le configurer afin qu'il utilise body-parser (json).

Faire écouter le serveur sur le port de votre choix.

### 2. Routes

Dans un dossier `routes`, créer les routes suivantes :

- `/vehicle/cars`, GET
- `/vehicle/car`, GET, paramètre `id`
- `/vehicle/car`, POST, paramètre `id`
- `/vehicle/car`, PUT, paramètre `id`
- `/vehicle/car`, DELETE, paramètre `id`
- `/vehicle/bikes`, GET
- `/vehicle/bike`, GET, paramètre `id`
- `/vehicle/bike`, POST, paramètre `id`
- `/vehicle/bike`, PUT, paramètre `id`
- `/vehicle/bike`, DELETE, paramètre `id`

> Faites en sorte de spérarer de façon logique les routes et également les fichiers !

> Il est également possible d'éviter de dupliquer la partie commune à toutes les routes

### 3. Models

Dans un dossier `models`, créer les modèles suivants (avec mongoose) :

- Car

```json
{
  "id": number, // 1
  "brand": string, // bmw
  "model": string, // x3
  "year": number, // 2015
  "power": number, // 150
  "door_number": number, // 5
  "type": string, // suv
  "price": number, // 25000
  "reserved": boolean // true
}
```

- Bike

```json
{
  "id": number, // 1
  "brand": string, // yamaha
  "model": string, // r1
  "year": number, // 2018
  "power": number, // 201
  "type": string, //
  "price": number, // 14000
  "reserved": boolean // false
}
```

### 4. Controllers

Dans un dossier `controllers`, créer les fonctions suivantes :

- getCars
- getCarById
- createCar
- updateCarById
- deleteCarById
- getBikes
- getBikeById
- createBike
- updateBikeById
- deleteBikeById

> Ne pas oublier de lier chaques fonctions à une route

Pour chaque fonctions effetuer les différentes intéractions avec la base de données pour aller :

- Chercher
- Créer
- Mettre à jour
- Supprimer

Penser à tester avec Postman ou cURL que les routes font bien leur travail.

Dans le cas d'ajout / modification / suppression de données, aller vérifier directement dans la base de données.
