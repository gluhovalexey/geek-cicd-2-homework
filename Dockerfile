FROM node:12.22.10-alpine

ARG PROJECT_DIR="/opt/nest-api"

WORKDIR $PROJECT_DIR

RUN npm install

COPY . .

CMD ["npm run start:dev"]