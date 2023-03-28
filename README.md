# NFP119-Docker-Node
Compo docker pour le cours de programmation fonctionnelle

- ### Lancer le container

    ```Shell
    docker-compose up -d
    ```

- ### Arrêter le container

    ```Shell
    docker-compose down
    ```

- ### Ouvrir le container dans un terminal

    ```Shell
    docker exec -it nfp-119-api-tasks-node-1 sh
    ```

- ### Sortir du terminal

    ###### Dans le terminal du container
    ```Shell
    exit
    ```

- ### Commandes curl pour simuler des requêtes sur l'API

  - #### Utilisateurs

    ###### Dans le terminal du container
        
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

    ###### Dans le terminal du container
    
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