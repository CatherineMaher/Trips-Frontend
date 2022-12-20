FROM node:latest As node
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginxinc/nginx-unprivileged
COPY --from=node /app/dist/assignment1 /usr/share/nginx/html/
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
