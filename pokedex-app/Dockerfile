FROM node:12.18.3-alpine as node
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx
EXPOSE 80
COPY --from=node /app/dist/pokedex-app /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]