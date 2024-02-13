FROM node:18-alpine
RUN apk add g++ make py3-pip
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3031

CMD [ "npm", "run", "start:prod"]
