FROM node:10-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build-prod

FROM nginx:1.13
EXPOSE 3000
COPY --from=node /app/dist/daenerys /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
