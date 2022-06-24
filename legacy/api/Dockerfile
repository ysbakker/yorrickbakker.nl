FROM node:latest

LABEL maintainer="Yorrick Bakker"
ENV NODE_ENV=production

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

RUN npm install
USER node

COPY --chown=node:node . .

ENTRYPOINT [ "node", "index.js" ]