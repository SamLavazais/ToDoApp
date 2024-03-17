# Next step

# Project (current state)

MODIFIER CETTE PARTIE POUR QU'ELLE SOIT + DESCRIPTIVE & SUCCINCTE
- les bullets comme 'fetcher blabla' sont plutôt à indiquer dans 'next step'
- une fois que la fonctionnalités est mise en place, il suffit d'écrire "afficher la liste des tâches depuis la BDD"

## Design/Architecture d'ensemble
.

## Serveur & API

- initialisation d'un serveur Node/Express fonctionnel
- Doc : schéma de l'API (m'inspirer de mon schéma pour le projet collectif)
- route "Tasks"
- un endpoint GET pour transmettre l'ensemble des tâches
- initialisation de la connexion à la DB PostGreSQL + 1ère requête fonctionnelle
- gestion minimale des erreurs (personnalisation de l'erreur)

## DB

- Doc : relational model diagram 
- initialisation d'un serveur PostGre
- mise à dispo d'une table "Tasks" (taskId (PK), Content, isCompleted)

## Front

- Doc : wireframe
- page unique : afficher la liste des tâches depuis le serveur
- distinguer celles qui sont déjà réalisées
- les filtrer par isDone... (prévoir l'itération sur toute propriété existante)
- UI : design CSS minimal (wireframe)


# Setup

- Créer le projet : npm create vite@latest todolist
- Caractéristiques : Svelte (!= SvelteKit), Javascript



