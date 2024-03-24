FROM node:18-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install
# RUN node config/configDB.js

CMD [ "node", "server.js" ]

EXPOSE 3000