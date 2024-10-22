# Use base image
FROM node:14.15.4

# Create a directory in the container to store the application
RUN mkdir website

# Set the working directory to the app directory
WORKDIR /website

# Copy the public directory to the app directory
COPY public /website/public

# Copy the src directory to the app directory
COPY src /website/src

# Copy the package.json file to the app directory
COPY package.json /website/package.json

# Install the dependencies
RUN npm install

# Expose the port where the application will be running
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
