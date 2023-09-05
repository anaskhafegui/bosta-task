# Use an official Node.js runtime as a parent image
FROM node:14

# Set environment variables (optional)
# ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the Nest.js app runs on (change this to your app's port)
EXPOSE 3000

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]
