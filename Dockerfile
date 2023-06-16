FROM node:14.15

COPY . /test-app/
WORKDIR /test-app

RUN npm install

ENTRYPOINT ["npm", "run", "test-sg-chrome"]