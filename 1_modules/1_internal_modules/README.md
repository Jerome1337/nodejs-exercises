# Exercice 1 - Les modules internes

## Objectif

Créer des modules et comprendre leurs fonctionnent.

## Énoncé

### 1. Shape

Créer une classe nommée `Shape` dans un fichier `shape.js`.

Cette classe devra contenir :

- Un champs `name` qui sera utilisé pour stocker le nom de la forme.
- Un champs `sideNumber` qui sera utilisé pour stocker le nombre de coté qu'a une forme.
- Une fonction `print` qui servira à renvoyer une phrase contenant son nom, nombre de coté et son aire.

> Un paramètre devra être passé a cette fonction.

Par exemple:

```sh
La forme nommée "F" à X cotés, son aire est de X.
```

Exporter la classe afin de pouvoir la réutiliser ailleurs.

> ⚠️ Nous utilisons NodeJS

### 2. Square

Créer une classe nommée `Square` dans un fichier `square.js`, cette classe devra étendre la classe `Shape`.

Cette classe devra contenir :

- Un champs `sideSize` qui sera utilisé pour stocker la taille des cotés.
- Une fonction `area` qui servira à calculer l'aire de la forme et qui renverra l'aire sous forme de nombre.

> ⚠️ Ne pas oublier d'ajouter les champs de la classe Shape

Exporter la classe afin de pouvoir la réutiliser ailleurs.

### 3. Triangle

Créer une classe nommée `Triangle` dans un fichier `triangle.js`, cette classe devra étendre la classe `Shape`.

Cette classe devra contenir :

- Un champs `baseSize` qui sera utilisé pour stocker la taille de la base.
- Un champs `height` qui sera utilisé pour stocker la hauteur du triangle.
- Une fonction `area` qui servira à calculer l'aire de la forme et qui renverra l'aire sous forme de nombre.

Exporter la classe afin de pouvoir la réutiliser ailleurs.

### 4. Index

Importer les classes `Square` et `Triangle` afin d'utiliser les fonctions `area` et `print`.

Instancier de nouveaux `Square` et `Triangle` puis renvoyer dans la console le résultat.

### **Résultat attendu**

```sh
$ node index.js
La forme nommée "carré" à 4 cotés, son aire est de 54.
La forme nommée "triangle" à 3 cotés, son aire est de 14.4.
```
