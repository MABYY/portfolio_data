FROM node:16.13.1-alpine

WORKDIR /PORTFOLIO_DATA

COPY .env ./

# Install build dependencies for bcrypt
RUN apk add --no-cache python3 make g++ linux-headers postgresql-clien

COPY package*.json ./

RUN npm install

COPY . .

COPY startfile.sh /startfile.sh
COPY wait-for-db.sh /wait-for-db.sh

RUN chmod +x /startfile.sh /wait-for-db.sh

EXPOSE 3000

ENTRYPOINT ["/wait-for-db.sh", "db", "5432", "/startfile.sh"]
