FROM node:19-bullseye
ENV TIME_ZONE=Asia/Jakarta
WORKDIR /opt/app
COPY package*.json ./
RUN npm i --force
RUN npm ci --force --only=production
COPY . .
EXPOSE 3018
CMD [ "npm", "run", "start_linux" ]