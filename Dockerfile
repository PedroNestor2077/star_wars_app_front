FROM node:20
WORKDIR /usr/src
COPY . .
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]