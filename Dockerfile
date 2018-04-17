FROM node:carbon-alpine

WORKDIR /usr/src/app
COPY . .

ENV NODE_ENV production
RUN npm install

EXPOSE 9001

CMD ["npm", "start"]