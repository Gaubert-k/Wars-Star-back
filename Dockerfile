From node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

COPY . . 

ENV PORT=5000
EXPOSE  5000

CMD ["npm", "start"]

