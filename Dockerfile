FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Vérifier la qualité du code avant le build
RUN npm run lint
EXPOSE 8080
CMD ["node", "src/app.js"]
