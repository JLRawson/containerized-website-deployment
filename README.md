# list-website

Start Running:
1. Open Docker
2. docker-compose -f docker-compose.yaml up
3. Run front and backend
    cd [frontend/backend]
    npm start

Visitng Mongo Express: http://localhost:8081/




curl -X POST http://localhost:2999/api/users \
-H "Content-Type: application/json" \
-d '{"username": "newuser", "message": "Wewewww", "password": "test"}'

curl -X GET http://localhost:2999/api/user/{username}