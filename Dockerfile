FROM raniot/base

RUN apk add --no-cache curl gcc g++ make python2 && \
 mkdir -p /usr/src && \
 curl -s http://www.airspayce.com/mikem/bcm2835/bcm2835-1.56.tar.gz | tar -C /usr/src -xvz && \
 cd /usr/src/bcm2835-1.56 && \
 ./configure --prefix=/usr && \
 make && \
 make install && \

RUN npm install node-dht-sensor

COPY package*.json ./

RUN npm install
COPY . .

CMD ["npm", "start"]
