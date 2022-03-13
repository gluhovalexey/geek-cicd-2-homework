FROM node:12.22.10

ARG PROJECT_DIR="nest-api"

ADD . /$PROJECT_DIR
WORKDIR /$PROJECT_DIR

RUN npm i
RUN npm run build

ENTRYPOINT [ "./nest-api" ]
