# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app

COPY package*.json /app/
RUN npm install --silent
COPY ./ /app/
RUN npm run build


# Stage 1, based on Nginx build app ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENV REACT_APP_BACKEND_API http://www.imageintel.act3-ace.com
