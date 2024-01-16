### dockerized website

# Description

This project is a basic website developed in stages to explore Docker:

Stages:

1. Started with a local React frontend, a local Express backend, and a MongoDB Docker container.
2. Transitioned to Docker containers for the frontend, backend, and MongoDB, enabling seamless interactions.
3. Advanced to Kubernetes cluster deployment, orchestrating all components for scalability and resilience.


# K8s Setup

Pre-Req Downloaded
1. Docker
2. Minikube

Start to Finish - K8s
1. Set up node modules
    - cd [frontend/backend]
    - npm install
    - cd ..
2. Start cluster
    - (open/start docker) 
    - minikube start
3. Create images of backend and frontend
    - eval $(minikube docker-env)
    - cd [frontend/backend]
    - docker build -t [frontend/backend] .
    - cd ..
4. Apply to cluster
    - cd deployment
    - kubectl apply -f mongo.yaml
    - kubectl apply -f mongo-express.yaml
    - kubectl apply -f backend.yaml
    - kubectl apply -f frontend.yaml
5. Check on cluster, make sure each pod is ready
    - kubectl get pods
6. Access frontend (make sure you aren't using a VPN)
    - minikube service frontend --url
7. Delete entire cluster (even others that may be running)
    - kubectl delete all --all -n default


# Misc. Commands to Run Sections

Running Half-Local and Half-Containers:
1. Open Docker
2. docker-compose -f partial-docker-compose.yaml up
3. Run front and backend
    - cd [frontend/backend]
    - npm start
Note: API URls have to be changed from mongo to localhost

Running All-Containers:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run backend
    - docker build -t [frontend/backend] .
    - docker run -p [3000:3000/2999:2999] --name [frontend/backend] -d [frontend/backend]
Note: API URLs have to be changed from localhost to Mongo

Debugging: docker logs backend

Visiting Mongo Express Locally: http://localhost:8081/

Starting Running Kubernetes:
1. minikube start --driver=docker
2. eval $(minikube docker-env)
3.  Start Cluster
    - kubectl apply -f mongo.yaml
    - kubectl apply -f mongo-express.yaml
    - kubectl apply -f backend.yaml
    - kubectl apply -f frontend.yaml
4. minikube service frontend --url
5. kubectl delete all --all -n default

# Misc. Local Backend Tests

curl -X POST http://localhost:2999/api/users \
-H "Content-Type: application/json" \
-d '{"username": "newuser", "message": "Wewewww", "password": "test"}'

curl -X GET http://localhost:2999/api/user/{username}

curl -X GET http://localhost:2999/api/login \
-H "Content-Type: application/json" \
-d '{"username": "my", "password": "first"}'

curl -X POST http://localhost:2999/api/login -H "Content-Type: application/json" -d '{"username": "1", "password": "2"}'
