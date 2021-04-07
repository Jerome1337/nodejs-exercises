# Exercice 3 - Operating System

## Objectif

Utiliser l'API Operating System de NodeJS pour intéragir avec l'OS de la machine.

## Énoncé

Importer l'API Operating System (`os`) dans un nouveau fichier JavaScript.

> https://nodejs.org/api/os.html

### 1. Récupérer les informations des CPUs

Utiliser la fonction `cpus()` de l'API `os` afin de récupérer les informations de vos CPU.

Afficher dans la console les informations.

**Résultat attendu**

Voici un exemple de ce que la fonction devrait retourner.

```js
[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0,
    },
  },
];
```

### 2. Récupérer le nombre de mémoire système libre

Utiliser les fonction `freemem()` et `totalmem()` afin de récupérer les informations.

> Les fonctions renvoient des informations sous forme de bytes.

Convertir les informations récupérer en GigaByte.

> Rappel:
>
> un KiloByte => 1024 Bytes,
>
> MegaByte => 1024 KiloBytes,
>
> GigaByte => 1024 MegaBytes

Calculer également le pourcentage de mémoire libre (toujours en Gigabyte).

Enregistrer les informations dans un objet de la forme suivante :

```js
{
  freeMem: number,
  totalMem: number,
  freePercentage: number,
  unit: string,
}
```

Renvoyer le objet dans la console

**Résultat attendu**

```js
{
  freemem: 10,
  totalmem: 12,
  freepercentage: 85,
  unit: 'gb'
}
```

### 3. Récupérer les informations de l'OS

Utiliser les fonctions suivantes afin de récupérer les informations de l'OS afin de les renvoyer dans la console.

```sh
userInfo()
arch()
platform()
type()
uptime()
```

Enregister les informations dans un objet ayant la forme suivante:

```js
{
  architecture: string,
  platform: string,
  type: string,
  uptime: number, // en heure
  username: string,
  homedir: string,
  shell: string,
}
```

**Résultat attendu**

La console devrait afficher un objet comme ceci:

```js
{
  architecture: 'x64',
  platform: 'linux',
  type: 'Linux',
  uptime: 2,
  username: 'jerome',
  homedir: '/home/jerome',
  shell: '/usr/bin/zsh',
}
```
