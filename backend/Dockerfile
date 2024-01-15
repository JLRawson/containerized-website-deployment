FROM node:18.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2999

CMD ["node", "src/app.js"]
