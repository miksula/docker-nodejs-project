# Use an official Node runtime as a parent image
FROM node:20-alpine

# Default node user for the image
USER node

# Set the working directory
WORKDIR /home/node/code

# Bundle app source inside Docker image
COPY --chown=node:node . .

# Install any needed packages
RUN npm install

# Define environment variable
ENV NODE_ENV development

# Run the app when the container launches
CMD ["node", "src/app.js"]