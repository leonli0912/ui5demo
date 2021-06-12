 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 WORKDIR /myapp
 COPY . .
 RUN npm install
 #CMD ["npm", "run","ui5"]
 EXPOSE 8333 1337 
 #CMD [ "npm", "run","ui5","--verbose" ]
 CMD [ "npm", "run","lserve"]
