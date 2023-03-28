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

- ### Exemple de commande curl pour simuler un POST sur une appli node

###### Dans le terminal du container

```shell
curl -X GET -H "Content-Type: application/json" http://localhost:8080/users

curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com"}' http://localhost:8080/users
curl -X GET -H "Content-Type: application/json" http://localhost:8080/users/{id}
curl -X PUT -H "Content-Type: application/json" -d '{"name": "John Dont", "email": "johndont@example.com"}' http://localhost:8080/users/{id}
curl -X DELLETE-H "Content-Type: application/json" http://localhost:8080/users/{id}
```

```shell
curl -X GET -H "Content-Type: application/json" http://localhost:8080/tasks

curl -X POST -H "Content-Type: application/json" -d '{"name": "task name", "detail": "example"}' http://localhost:8080/tasks
curl -X GET -H "Content-Type: application/json" http://localhost:8080/tasks/{id}
curl -X PUT -H "Content-Type: application/json" -d '{"userId": "{userId}", "detail": "a more detailed example"}' http://localhost:8080/tasks/{id}
curl -X DELLETE-H "Content-Type: application/json" http://localhost:8080/tasks/{id}
```