# develop stage
FROM node:20-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn
RUN yarn build

# production stage
FROM nginx:1.25.2-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]