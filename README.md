### list-website

# Description


# To Do List



# K8s Setup

Pre-Req Downloaded
1. Docker
2. Minikube

Start to Finish - K8s
1. Set up node modules
    cd [frontend/backend]
    npm install
    cd ..
2. Start cluster
    (open/start docker) 
    minikube start
3. Create images of backend and frontend
    eval $(minikubr docker-env)
    cd [frontend/backend]
    docker build -t [frontend/backend] .
    cd ..
4. Apply to cluster
    cd deployment
    kubectl apply -f mongo.yaml
    kubectl apply -f mongo-express.yaml
    kubectl apply -f backend.yaml
    kubectl apply -f frontend.yaml
5. Check on cluster, make sure each pod is ready
    kubectl get pods
6. Access frontend
    minikube service frontend --url
7. Delete entire cluster (even others that may be running)
    kubectl delete all --all -n default


# Misc. Commands to Run Sections

Running Half-Local and Half-Containers:
1. Open Docker
2. docker-compose -f partial-docker-compose.yaml up
3. Run front and backend
    cd [frontend/backend]
    npm start
Note: API URls have to be changed from mongo to localhost

Running All-Containers:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run backend
    docker build -t [frontend/backend] .
    docker run -p [3000:3000/2999:2999] --name [frontend/backend] -d [frontend/backend]
Note: API URls have to be changed from localhost to mongo

Debugging: docker logs backend

Visitng Mongo Express: http://localhost:8081/

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
