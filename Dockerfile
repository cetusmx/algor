# Stage 1: Build the React client
FROM node:20-alpine AS client-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Stage 2: Setup the Express server
FROM node:20-alpine
WORKDIR /app

# Copy server dependencies and install
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci --production

# Copy server source code
COPY server/ ./

# Copy built React files to the container
# The Express app is configured to serve static files from ../client/dist
WORKDIR /app
COPY --from=client-builder /app/client/dist ./client/dist

# Expose port and start the server
EXPOSE 3000
WORKDIR /app/server
CMD ["node", "index.js"]
