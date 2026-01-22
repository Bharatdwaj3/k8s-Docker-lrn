# Use official Node image (includes npm)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite default port
EXPOSE 5173

# Run dev server (matches your Helm args)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]