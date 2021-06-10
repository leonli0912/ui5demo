 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 WORKDIR /webapp
 COPY . .
 RUN npm install
 #CMD ["npm", "run","ui5"]
 CMD [ "npm", "run","ui5" ]