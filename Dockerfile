FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm install -g pm2

EXPOSE 3000

#RUN npm run build
#CMD [ "pm2-runtime", "start", "pm2.json" ]
CMD [ "npm", "start"]
