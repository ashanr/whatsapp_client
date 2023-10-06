# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the code
COPY . .

# Build the project
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["pnpm", "run", "serve"]
