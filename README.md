# list-website

Start Running Locally:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run front and backend
    cd [frontend/backend]
    npm start

Visitng Mongo Express: http://localhost:8081/

Start Running Container:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run backend
    docker build -t backend .
    docker run -p 2999:2999 --name backend -d backend

Debugging: docker logs backend


curl -X POST http://localhost:2999/api/users \
-H "Content-Type: application/json" \
-d '{"username": "newuser", "message": "Wewewww", "password": "test"}'

curl -X GET http://localhost:2999/api/user/{username}


curl -X GET http://localhost:2999/api/login \
-H "Content-Type: application/json" \
-d '{"username": "my", "password": "first"}'

curl -X POST http://localhost:2999/api/login -H "Content-Type: application/json" -d '{"username": "1", "password": "2"}'
