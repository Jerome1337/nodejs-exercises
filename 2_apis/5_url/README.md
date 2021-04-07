# Exercice 5 - URL

## Objectif

Utiliser l'API URL de NodeJS afin de travailler avec les URL.

## Énoncé

Importer l'API URL (`url`) dans un nouveau fichier JavaScript.

> https://nodejs.org/api/url.html

### 1. Extraire les informations d'une URL

Transformer les URLs du tableau `urls` sous forme de chaîne de caractères en objet URL.

**Étapes**

- Créer une fonction qui va parser les URLs
- Utiliser la classe URL de l'API afin de créer de nouveaux objets URL
- Renvoyer un objet de la forme suivante avec les données récupérées des URLs

```json
{
  "href": "http://beginner.example.com/?actor=arch&berry=blade",
  "protocol": "http:",
  "origin": "http://beginner.example.com",
  "hostname": "beginner.example.com",
  "pathname": "/",
  "params": {
    "actor": "arch",
    "berry": "blade"
  }
}
```

Pour chaque URLs du tableau renvoyer dans la console l'objet du dessus.

**Résultat attendu**

```sh
$ node url.js

{
  href: 'http://www.example.org/bomb/arithmetic',
  protocol: 'http:',
  origin: 'http://www.example.org',
  hostname: 'www.example.org',
  pathname: '/bomb/arithmetic',
  params: URLSearchParams {}
}
{
  href: 'https://www.example.org/?boot=agreement&apparel=basketball',
  protocol: 'https:',
  origin: 'https://www.example.org',
  hostname: 'www.example.org',
  pathname: '/',
  params: URLSearchParams { 'boot' => 'agreement', 'apparel' => 'basketball' }
}
...
```

### 2. Transformer des domaines au format ASCII

**Étapes**

- Créer une fonction qui va extraire les domaines des URLs du tableau `unicodeUrls`
- Utiliser la fonction `domainToASCII()` pour transformer les domaines
- Renvoyer les domaines au format ASCII dans la console

**Résultat attendu**

```sh
$ node url.js

xn--fiq4mo5s.com
xn--6qq79v.com
xn--48s290a.com
xn--espaa-rta.es
xn--80apbdbbd9cg.ru
xn--b1agh1afp.ru
xn--80atdl2c.ru
```

### 3. Transformer des domaines au format Unicode

**Étapes**

- Créer une fonction qui va extraire les domaines des URLs du tableau `unicodeUrls`
- Utiliser la fonction `domainToUnicode()` pour transformer les domaines
- Renvoyer les domaines au format Unicode dans la console

**Résultat attendu**

```sh
$ node url.js

中国人.com
你好.com
学校.com
españa.es
китайский.ru
привет.ru
школа.ru
```
