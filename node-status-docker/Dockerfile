# Use official Node 16 image as our runtime
FROM node:16

# All following commands run inside this folder in the container
WORKDIR /usr/src/app

# Copy only dependency manifests first for better Docker layer caching
COPY package*.json ./

# Install app dependencies (from package.json)
RUN npm install

# Copy the rest of the application code into the image
COPY . .

# Document that the container listens on port 3000
EXPOSE 3000

# Start the app (script defined in package.json: "start": "node app.js")
CMD ["npm","start"]
