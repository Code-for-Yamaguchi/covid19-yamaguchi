FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./app

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
