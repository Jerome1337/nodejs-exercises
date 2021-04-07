# Exercice 2 - Les modules externes

## Objectif

Apprendre à installer et utiliser un module externe au projet avec NPM.

## Énoncé

### 1. Préparation

Initialiser le projet avec la commande `npm`.

Ajouter la librairie [lodash](https://www.npmjs.com/package/lodash) en tant que dépendance du projet.

### 2. Utilisation

> Ne pas hésiter à aller chercher dans le [documentation de Lodash](https://lodash.com/docs) afin de trouver comment
> utiliser les fonctions.

#### **Chunk**

Pour le tableau `array_1`, créer des sous-tableaux grâce à la commande `chunk` de Lodash.

#### **Résultat attendu**

```sh
$ node module.js
[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
```

#### **Last**

Pour le tableau `array_2`, récupérer la valeur de la dernière entrée du tableau avec la commande `last` de Lodash.

#### **Résultat attendu**

```sh
$ node module.js
{ name: 'corbeau', genre: 'female' }
```

#### **Nth**

Pour le tableau `array_2`, récupérer la valeur de la troisième entrée du tableau avec la commande `nth` de Lodash.

#### **Résultat attendu**

```sh
$ node module.js
{ name: 'ours', genre: 'male' }
```
