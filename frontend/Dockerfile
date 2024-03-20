FROM node:21-slim

WORKDIR /App

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 5173 