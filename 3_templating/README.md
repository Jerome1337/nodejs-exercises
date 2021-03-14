# Templating

## Objectif

Utiliser un moteur de templating afin d'afficher des page web dynamiques

## Pré-requis

Avoir réaliser l'exercice [#2](../2_crud/README.md) et avoir un CRUD fonctionnel.

## Énoncé

### 1. Get Started

Pour cet exercice nous allons utiliser le moteur de templating [EJS](https://ejs.co/).

Installer `EJS` avec NPM dans le projet.

Configurer `Express` afin qu'il utilise `ejs` dans son moteur de vues.

### 2. Views

Dans un dossiers `views`, créer un dossier `pages` et un dossier `partials`.

À l'intérieur du dossier `partials` créer les templates partielles qui vont être utiliser dans les différentes pages.

> Par exemple head, header, footer ...

Dans le dossier `pages` créer les pages suivantes :

> Pour toutes les pages ajouter le style que vous souhaîtez

#### **Accueil**

Page d'accueil nous permettant d'avoir des boutons pour nous rediriger vers d'autre pages.

#### **Listing des véhicules**

Page contenant un tableau de véhicule (récupérés dans la base de données).

Cette même page va en fonction de l'URL afficher un seul type de véhicule

Dans le tableau chaque ligne conrespondant à un véhicule, un lien vers la page d'information du véhicule
devra être affiché

Format du tableau :

| ID  | Marque  | Modèle | Année | Action                     |
| --- | ------- | ------ | ----- | -------------------------- |
| 1   | Renault | Clio   | 2008  | Bouton page et suppression |
| 2   | Peugeot | c3     | 2016  | Bouton page et suppression |
| X   | X       | X      | XXXX  | Bouton page et suppression |

#### **Informations d'un véhicule**

Cette page d'informations devra contenir **toutes** les informations du véhicule choisi.

#### **Ajout d'un véhicule**

Cette page doit contenir un formulaire pour pouvoir ajouter un véhicule

### 3. Routes

Modifier les routes précédement écrites afin d'afficher les pages et de récupérer les données à afficher.
