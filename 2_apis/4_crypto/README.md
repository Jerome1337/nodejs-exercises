# Exercice 4 - Crypto

## Objectif

Utiliser l'API Crypto de NodeJS

## Énoncé

Importer l'API Crypto (`crypto`) dans un nouveau fichier JavaScript.

> https://nodejs.org/api/crypto.html

### 1. Générer une nouvelle clef SSH

Utiliser la fonction `generateKeyPair()` de l'API afin de générer une nouvelle paire de clef SSH.

Voici les options à utiliser pour la génération de la clef.

- Longueur de la clef : 4096

**Clef publique**

- Type : spki
- format : pem

**Clef privée**

- Type : pkcs8
- format : pem
- encodage : aes-256-cbc
- un mot de passe de votre choix

Une fois la paire de clefs générer, enregistrer la clef public dans un fichier nommée `rsa_id.pub` et la privée dans
un fichier `rsa_id`.

> Utiliser : https://nodejs.org/api/fs.html#fs_filehandle_appendfile_data_options

**Résultat attendu**

Deux nouveau fichier devrait avoir été créés et devrait chacun contenir une partie de la paire de la clef SSH créée.

```sh
$ crypto.js

$ ls
crypto.js  README.md  rsa_id  rsa_id.pub
```

### 2. Chiffrer une chaîne de caractères avec SHA1

Utiliser les fonctions `createHash()`, `update()`, `digest()` de l'API afin de chiffrer une chaîne de
caractères avec l'algorithme SHA1.

**Étapes**

- Créer une fonction qui va prendre une chaîne de caractères en paramètre
- Dans cette fonction créer un nouveau hash avec l'algorithme SHA1
- Mettre à jour le contenu du hash avec la valeur passée en paramètre, le tout avec l'encodage `binary`
- Récupérer la valeur chiffrée (digest ou hash) au format hexadécimal (hex)
- Appeler la fonction et renvoyer dans la console la valeur

> Ne pas hésiter à aller chercher dans la documentation mise plus haut

**Résultat attendu**

Le programme devrait retourner quelque chose de ce format :

```sh
$ crypto.js
# jerome
723156650c5778d0e4df4b2fbfeefa65359302e5
```

Vérification de la valeur chiffrée.

A l'aide du site suivant https://hashtoolkit.com/decrypt-sha1-hash/, vérifier que la valeur déchiffrée correspond à
la valeur initiale.
