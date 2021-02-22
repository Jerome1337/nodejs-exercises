# Exercice 2 - File System

## Objectif

Utiliser l'API File System de NodeJS pour intéragir avec des fichiers.

## Énoncé

Importer l'API File System (`fs`) dans un nouveau fichier JavaScript.

> https://nodejs.org/api/fs.html

### 1. Lire un fichier

Utiliser la fonction `readFile` pour lire le contenu du fichier `text.txt`.

> Ne pas hésiter à utiliser la variable `__dirname` afin de savoir dans quel dossier vous êtes

Afficher le contenu du fichier dans la console à l'aide d'un console log.

**Résultat attendu**

Le texte `Voici le contenu du fichier` devrait être afficher dans la console.

### 2. Dupliquer un fichier

Créer un nouveau dossier grâce à `mkdir` dans le dossier courant `2_fs`, nommer ce dossier comme vous le souhaîtez.

Utiliser la fonction `copyFile` pour dupliquer le fichier `text.txt` dans le dossier créé précédemment.

**Résultat attendu**

Dans le dossier que vous avez créé il devrait y avoir un fichier (ayant le nom de votre choix) et contenant le même contenu que le fichier `text.txt`.

### 3. Afficher les stats d'un path

Utiliser la fonction `stat` de l'API File System pour afficher les statistiques du fichiers `text.txt` et du dossier créer dans l'étape précédente.

> Il est possible d'utiliser une boucle pour optimiser le code et ne pas faire de duplication.

Afficher dans la console les stats.

**Résultat attendu**

Dans la console il devrait y avoir un objet de cette forme :

```js
Stats {
  dev: 16777220,
  mode: 16877,
  nlink: 3,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214262,
  size: 96,
  blocks: 0,
  atimeMs: 1561174653071.963,
  mtimeMs: 1561174614583.3518,
  ctimeMs: 1561174626623.5366,
  birthtimeMs: 1561174126937.2893,
  atime: 2019-06-22T03:37:33.072Z,
  mtime: 2019-06-22T03:36:54.583Z,
  ctime: 2019-06-22T03:37:06.624Z,
  birthtime: 2019-06-22T03:28:46.937Z
}
```
