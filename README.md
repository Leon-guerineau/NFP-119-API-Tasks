# NFP119-API-Tasks
API REST de gestion de taches développer en express js pour le cours de programmation fonctionnelle

- ### Lancer les containers

  - ###### Lance automatiquement la commande *npm start* dans le container

  ```Shell
  docker-compose up -d
  ```

- ### Liens

  - #### API
    http://localhost:8080

  - #### Mongo Express (pour visualiser la base de données)
    http://localhost:8081

- ### Arrêter les containers

  ```Shell
  docker-compose down
  ```

- ### Ouvrir le terminal du container node

  ```Shell
  docker exec -it NFP-119-API-Tasks-node sh
  ```

- ### Installer les modules

  - ###### Commande à exécuter dans le terminal du container node

  ```Shell
  npm i
  ```

- ### Sortir du terminal

  - ###### Commande à exécuter dans le terminal du container node

  ```Shell
  exit
  ```

- ### Commandes curl pour simuler des requêtes sur l'API

  - #### Utilisateurs

    - ###### Commandes à exécuter dans le terminal du container node
    - ###### {userId} à remplacer par des ids générés
        
    ```shell 
    # List All
    curl -X GET -H "Content-Type: application/json" http://localhost:8080/users
    # Create
    curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com"}' http://localhost:8080/users
    # Read
    curl -X GET -H "Content-Type: application/json" http://localhost:8080/users/{userId}
    # Update
    curl -X PUT -H "Content-Type: application/json" -d '{"name": "John Dont", "email": "johndont@example.com"}' http://localhost:8080/users/{userId}
    # Delete
    curl -X DELLETE-H "Content-Type: application/json" http://localhost:8080/users/{userId}
    ```

  - #### Tâches

      - ###### Commandes à exécuter dans le terminal du container node
      - ###### {userId} et {taskId} à remplacer par des ids générés
    
    ```shell
    # List All
    curl -X GET -H "Content-Type: application/json" http://localhost:8080/tasks
    # List by userId
    curl -X GET -H "Content-Type: application/json" http://localhost:8080/users/{userId}/tasks
    # Create
    curl -X POST -H "Content-Type: application/json" -d '{"name": "task name", "detail": "example"}' http://localhost:8080/tasks
    # Read
    curl -X GET -H "Content-Type: application/json" http://localhost:8080/tasks/{taskId}
    # Update
    curl -X PUT -H "Content-Type: application/json" -d '{"userId": "{userId}", "detail": "a more detailed example"}' http://localhost:8080/tasks/{taskId}
    # Delete
    curl -X DELLETE -H "Content-Type: application/json" http://localhost:8080/tasks/{taskId}
    ```