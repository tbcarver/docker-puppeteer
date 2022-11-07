FROM zenika/alpine-chrome:100-with-node
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN sed -i "s/app\/index.js/index.js/g" package.json
RUN npm install --production --silent
COPY ./app ./
COPY .env.production .env
# RUN chown -R node /usr/src/app
USER chrome
# RUN echo 'kernel.unprivileged_userns_clone=1' > /etc/sysctl.d/00-local-userns.conf
# RUN service procps restart
CMD ["node", "index.js"]
