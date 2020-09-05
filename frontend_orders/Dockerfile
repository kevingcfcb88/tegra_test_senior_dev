FROM node:12-alpine

WORKDIR /app_frontend_orders

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]