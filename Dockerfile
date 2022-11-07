FROM zenika/alpine-chrome:100-with-node
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN sed -i "s/app\/index.js/index.js/g" package.json
RUN npm install --production --silent
COPY ./app ./
COPY .env.production .env
USER chrome
CMD ["node", "index.js"]
