FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Start Nginx to serve the application
CMD ["nginx", "-g", "daemon off;"]

#CMD [ "npm", "run", "dev" ]