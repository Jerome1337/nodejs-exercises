# Exercice 6 - Process

## Objectif

Utiliser l'API Process de NodeJS pour récupérer des infomrations concernant les processus NodeJS.

## Énoncé

Importer l'API Process (`process`) dans le fichier `process.js`.

> https://nodejs.org/api/process.html

### 1. Afficher la quantité de mémoire que le processus utilise

Utiliser la fonction `memoryUsage()` de l'API process.

Récupérer la valeur de la clef `heapUsed` (correspondant à quantité de mémoire utilisée par le processus).

Convertir la valeur (en bytes) en MegaByte (voir exercice numéro `3_os`).

Renvoyer dans la console une chaîne de caractère comme ceci :

```text
The script uses approximately X MB
```

**Résultat attendu**

```text
The script uses approximately 5.2 MB
```

### 2. Récupérer les arguments passés lors de l'éxécution du script

Avec la propriété `argv` récupérer tous les arguments passés dans un nouveau fichier Javascript.

Créer deux conditions, si un argument est `nuit` renvoyer dans la console :

```text
C'est la nuit !
```

Si un argument est `jour` renvoyer dans la console :

```text
Il fait jour !
```

Si aucun des deux arguments est passé renvoyer :

```text
Vous devez passer un argument (nuit ou jour).
```

**Résultat attendu**

```sh
$ node monfichier.js nuit
C'est la nuit !

$ node monfichier.js jour
Il fait jour !

$ node monfichier.js
Vous devez passer un argument (nuit ou jour).

$ node monfichier.js autreArgument
```

### 3. Savoir combien de temps le CPU a été utilisé par le processus

Dans le fichier `process_exec_time.js`, utiliser la fonction `cpuUsage()` au debut de l'éxécution du processus afin de
récupérer le temps d'éxecution initial et de l'enregistrer pour plus tard.

Après l'éxécution de la boucle `while`, utiliser une deuxième fois la fonction `cpuUsage()` en lui passant en argument
la valeur retournée par l'appel `cpuUsage()` du début.

Convertir la valeur de la clef `user` en seconde.

> La valeur `user` est en microseconde, une seconde est égale à 1 000 000 de microsecondes.

Renvoyer dans la console la chaîne de caractères suivante :

```text
Le processus a été exécuté en X.XXX secondes.
```

**Résultat attendu**

```sh
$ node process_exec_time.js
Le processus a été exécuté en 1.979181 secondes.
```
