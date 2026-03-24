FROM node:20-alpine AS build

WORKDIR /app/Ui

COPY Ui/package*.json ./
RUN npm ci

COPY Ui/ ./
RUN npx quasar build -m pwa

FROM nginx:1.27-alpine AS runtime

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/Ui/dist/pwa/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
