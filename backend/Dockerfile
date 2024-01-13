# Use an official Node runtime as a parent image
FROM node:18.18.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json (if available) files into the container at /app
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Your app binds to port 2999 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 2999

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "src/app.js"]
