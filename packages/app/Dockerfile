FROM node:13.7.0
#-alpine3.10

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# RUN \
#   apt-get update && \
#   apt-get -y install nginx

# COPY ./nginx/config /etc/nginx/config
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
COPY ./build /app
COPY ./public /public
COPY ./i18 /i18
COPY ./start.sh /app/start.sh

EXPOSE 80
CMD [ "/bin/bash", "/app/start.sh" ]
