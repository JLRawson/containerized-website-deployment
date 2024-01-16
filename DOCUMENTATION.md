# Setup and Running Instrutions

### K8s Setup

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
3. Enable ingress for local routing
    - minikube addons enable ingress
4. Create images of backend and frontend
    - eval $(minikube docker-env)
    - cd [frontend/backend]
    - docker build -t [frontend/backend] .
    - cd ..
5. Apply to cluster
    - cd deployment
    - kubectl apply -f mongo.yaml
    - kubectl apply -f mongo-express.yaml
    - kubectl apply -f backend.yaml
    - kubectl apply -f frontend.yaml
6. Check on cluster, make sure each pod is ready
    - kubectl get pods
7. Access frontend (make sure you aren't using a VPN)
    - minikube service frontend --url
8. Non-longterm fix for CORS policy blockage
    - (copy http given from previous command and paste in Cors Option in backend/src/app.js, then save)
    - (open new terminal)
    - eval $(minikube docker-env)
    - cd backend
    - docker build -t backend .
    - kubectl rollout restart deployment backend
    - kubectl rollout restart deployment backend
    - docker images
    - docker rmi [idOfPreviousBackendImage]
    - kubectl rollout restart deployment backend
    - (reload frontend)
9. Set up Database
    - minikube service mongo-express --url
    - (view prod -> view user -> new document)
    - {
        "_id": ObjectId(),
    	"username": "admin",
    	"password": "password",
    	"message": "test"
        }
    - (save)
    - (reload frontend)
10. Test Frontend
11. Delete entire cluster (don't do if you have others listed)
    - kubectl delete all --all -n default


### Misc. Commands to Run Sections

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

Restarting If You Update an Image: kubectl rollout restart deployment [frontend/backed]

Ingress Doc: https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/


### Misc. Local Backend Tests

curl -X POST http://localhost:2999/api/users \
-H "Content-Type: application/json" \
-d '{"username": "newuser", "message": "Wewewww", "password": "test"}'

curl -X GET http://localhost:2999/api/user/{username}

curl -X GET http://localhost:2999/api/login \
-H "Content-Type: application/json" \
-d '{"username": "my", "password": "first"}'

curl -X POST http://localhost:2999/api/login -H "Content-Type: application/json" -d '{"username": "1", "password": "2"}'

### Misc. Copy and Paste

kubectl apply -f mongo.yaml
kubectl apply -f mongo-express.yaml
kubectl apply -f backend.yaml
kubectl apply -f frontend.yaml