# Project
*(Current state : MVP en construction)*
*ATTENTION : version sans users ni subtasks*

## Setup

- Dockerisation du projet : pour lancer le projet, saisir `docker compose up` dans un shell

## Design/Architecture d'ensemble

- Projet fonctionnel sur Docker (Dockerfiles pour backend & frontend + docker-compose.yaml)
- *(en attente)* Approche TDD

## DB

- Serveur PostGreSQL
- Script d'initialisation de la database : création + pré-remplissage des 3 tables : Tasks, Subtasks, Users
- Modèle relationnel *(actuellement seulement la table Tasks est utilisée, mais les tables Subtasks et Users font parties du projet)*

## Back-end

- Serveur Node-Express
- *(en cours)* Route "/tasks" avec multiples endpoints pour opérations CRUD sur les todos 
    *Avancement actuel : 4 endpoints :*
        *- GET /tasks pour récupérer tous les todos*
        *- POST /tasks pour créer un todo*
        *- DELETE /tasks/:taskId pour supprimer un todo*
        *- PUT /tasks/:taskId pour updater un todo (indiquer qu'il a été effectué)*
- Controllers exécutant les requêtes à la DB et retournant la réponse sous format JSON
- Connexion au serveur PostGreSQL + requêtes PSQL grâce au package pg-promise
- Gestionnaire d'erreurs via middlewares dédiés

## Front-end

- Framework Svelte (avec Vite) => création du projet : `npm create vite@latest todolist` => choisir "Svelte" (!= SvelteKit), puis "Javascript"
- UI minimale et fonctionnelle

### Fonctionnalités :
- Afficher la liste des todos transmises par le depuis le serveur backend sur une page unique
- *(en attente)* zone d'input/formulaire pour ajouter une todo
- *(en attente)* bouton "delete" pour supprimer une todo
- *(en attente)* bouton/checkbox pour indiquer qu'une todo est terminée + indication visuelle
- *(en attente)* panneau permettant d'afficher les détails en cas de click sur une todo
- *(en cours : complétion seulement)* Filtres : en fonction de chacune des caractéristiques des tâches (complétion, catégorie...)
- *(en attente)* Approche TDD : mise en place de tests automatisés pour l'interface et les différentes fonctions

# Stack

-   Svelte (constructor : Vite)
-   Node.js + Express
-   PostGreSQL (avec 'pg-promise' côté node server)