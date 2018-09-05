FROM raniot/base

COPY package*.json ./
RUN npm 
COPY . .

CMD ["npm", "start"]