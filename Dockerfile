FROM node:12

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
