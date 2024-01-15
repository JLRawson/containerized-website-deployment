### list-website

# Description


# To Do List



# Sets of commands


Start Running Locally:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run front and backend
    cd [frontend/backend]
    npm start

Visitng Mongo Express: http://localhost:8081/

Start a Set of Containers:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run backend
    docker build -t backend .
    docker run -p 2999:2999 --name backend -d backend

Debugging: docker logs backend

Building an individual dockerfile: docker build -t [fronten/backend] .

Starting Running Kubernetes:
1. minikube start --driver=docker
2. eval $(minikube docker-env)
3.  Start Cluster
    kubectl apply -f mongo.yaml
    kubectl apply -f mongo-express.yaml
    kubectl apply -f backend.yaml
    kubectl apply -f frontend.yaml
4. minikube service frontend --url
5. kubectl delete all --all -n default

# Misc. Backend Tests

curl -X POST http://localhost:2999/api/users \
-H "Content-Type: application/json" \
-d '{"username": "newuser", "message": "Wewewww", "password": "test"}'

curl -X GET http://localhost:2999/api/user/{username}


curl -X GET http://localhost:2999/api/login \
-H "Content-Type: application/json" \
-d '{"username": "my", "password": "first"}'

curl -X POST http://localhost:2999/api/login -H "Content-Type: application/json" -d '{"username": "1", "password": "2"}'
