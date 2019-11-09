# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app

COPY package*.json /app/
RUN npm install --silent
COPY ./ /app/

CMD npm run start
