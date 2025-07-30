# TP Solo - API Tâches + Dockerisation

## Description
Ce projet est une API REST de gestion de tâches (Todo) réalisée en Node.js avec Express, Sequelize et MySQL, le tout dockerisé pour un déploiement facile.

## Fonctionnalités
- CRUD complet sur les tâches :
  - POST `/api/tasks` : Créer une tâche
  - GET `/api/tasks` : Lister toutes les tâches
  - GET `/api/tasks/:id` : Voir une tâche
  - PUT `/api/tasks/:id` : Modifier une tâche
  - DELETE `/api/tasks/:id` : Supprimer une tâche
- Gestion des erreurs (404, 400, 500)
- Persistance des données avec MySQL (via Docker)
- Sécurité de base avec Helmet et CORS

## Structure du projet
```
todo-api/
├── src/
│   ├── routes/
│   │   └── tasks.js
│   ├── models/
│   │   └── task.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── app.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── package.json
├── README.md
```

## Lancer le projet

### Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé
- (Optionnel) [Make](https://gnuwin32.sourceforge.net/packages/make.htm) pour Windows

### 1. Lancer avec Docker Compose
```bash
docker-compose up --build
```

### 2. (Optionnel) Lancer avec Makefile
```bash
make up
```

### 3. Accéder à l'API
- L'API est disponible sur : [http://localhost:8080/api/tasks](http://localhost:8080/api/tasks)
- Exemple de requête POST (créer une tâche) :
```json
{
  "description": "Faire les courses",
  "status": "à faire"
}
```

## Gestion Agile / Kanban
- Un GitHub Project (Kanban) a été créé pour suivre l'avancement :
  👉 [Tableau Kanban du projet](https://github.com/users/NoeCalmes/projects/1)
- Les tickets principaux sont :
  - CRUD API Tâches
  - Dockerisation de l'app

## Bonnes pratiques
- Utilisation de Docker pour l'API et la base de données
- Volumes pour la persistance MySQL
- Séparation du code (routes, modèles, middlewares)
- Gestion centralisée des erreurs

## Pour aller plus loin
- Ajouter des tests unitaires et d'intégration (dossiers `tests/` déjà créés)
- Ajouter des validations de champs
- Sécuriser davantage l'API

---

**Auteur :** [Ton Nom] 
