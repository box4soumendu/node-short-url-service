FROM Node:10

WORKDIR /user/src/app

COPY package*.json ./

COPY . .

EXPOSE 2021

CMD ["npm", "start"]