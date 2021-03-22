FROM node:13

ENV HOST 0.0.0.0
ENV APP_DIR /app/

WORKDIR ${APP_DIR}
COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

ARG DOCKER_ENV
ENV NODE_ENV=${DOCKER_ENV}

RUN npm run build
CMD ["npm", "start"]