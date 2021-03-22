# Projet "NASA's NeoWs Challenge

Lien du repertoire : [https://github.com/YassinL/neo_nasa_challenge]

## Informations générales

"Nasa's NeoWs Challenge" est un projet Front-End de création d'une app pour visualiser les données de l'API Nasa's Neows réalisé en React. Comme demandés ce projet est une onepage.

## Fonctionnalités à réaliser

- **création d'une app react**
- **Récupérer les données de l'API NASA's**
- **Afficher les données dans un graphique en utilisant Google Charts**
- **Ajouter un input select pour filtrer les données du graphique**
- **Ajouter une vue sous forme de table de données avec un sélecteur pouvant switcher le graphique et la table**

## Technologies

Liste (non exhaustive) des technologies et packages utilisés :

- [React](https://www.npmjs.com/package/react) : v 17.0.1
- [Node](https://nodejs.org/en/) : v 14.15.1
- [Style-component](https://www.npmjs.com/package/styled-components) : v 5.2.1
- [ESLint](https://www.npmjs.com/package/eslint) : v 7.15.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) : v 5.2.0
- [prop-types](https://www.npmjs.com/package/prop-types) : v 15.7.2
- [react-google-charts](https://www.npmjs.com/package/react-google-charts) : v 3.0.15

## Démarrer le projet

Dans un terminal, exécuter ces lignes :

`$ git clone https://github.com/YassinL/neo_nasa_challenge.git`

`$ cd ../path/to/the/file`

`$ npm install`

`$ npm start`

## Architecture

--- **.src**

&emsp; |--- **/components** : _Ensemble des composants_

&emsp; &emsp; |--- **/atoms** : _Composants individuels de petites tailles_

&emsp; &emsp; &emsp; &emsp;|--- **/Inputs** : \_Composants d'inputs de type "select"

&emsp; &emsp; &emsp; &emsp;|--- **/SVG** : _Fichiers SVG (Logo ou symboles)_

&emsp; &emsp; |--- **/molecules** : _Composants moyens (groupement d'atoms) tel que le Google Charts_

&emsp; &emsp; &emsp; &emsp;|--- **/GoogleCharts** : _Composant du graphqiue_

&emsp; &emsp; |--- **/organisms** : _Composants fonctionnels (groupement de molécules / atomes)_

&emsp; &emsp; &emsp; &emsp;|--- **/Header** : _Composant du Header_

&emsp; &emsp; &emsp; &emsp;|--- **/Footer** : _Composant du Footer_

&emsp; &emsp; |--- **/pages** : _Composants des vues de l'application (groupement de molécules)_

&emsp; &emsp; &emsp; &emsp;|--- **/NeoNasaView** : _Page d'accueil affichant les différentes fonctionnalités_

&emsp; |--- **/styles** : _Ensemble des composants pour afficher le style avec style components_

&emsp; &emsp; |--- **/base** : _Gère les styles de base du fichier (body, font-size, ...)_

&emsp; &emsp; |--- **/brekpoints** : _Gère la partie responsive (media queries)_

&emsp; &emsp; |--- **/index** : _Regroupe Base et ResetCSS pour la globalité de l'app_

&emsp; &emsp; |--- **/resetCSS** : _remise à zéro des styles par défaut des navigateurs_

&emsp; &emsp; |--- **/variables** : _Liste des variables (couleurs)_

--- **App.jsx** : _Point d'entrée d'application qui représente l'architecture HTML du body_

--- **Index.jsx** : _Fichier qui fait le lien entre "App.jsx" et "index.html"_
