# Etapa 1: Build del Frontend (Vite)
FROM node:20-alpine AS frontend-builder
WORKDIR /app
# Copiamos package.json general y el del cliente si es que tienes workspaces
COPY package*.json ./
# Instalamos dependencias
RUN npm install
# Copiamos el código fuente
COPY . .
# Construimos el frontend estático
RUN npm run build


# Etapa 2: Producción (Express + SQLite)
FROM node:20-alpine
WORKDIR /app

# Instalar dependencias para compilación de SQLite si es necesario
RUN apk add --no-cache python3 make g++ 

COPY package*.json ./
# Instalamos solo las dependencias de producción
RUN npm install --omit=dev

# Copiamos el código del backend
COPY server/ ./server/

# Copiamos el frontend compilado desde la etapa anterior
COPY --from=frontend-builder /app/dist ./dist

# Crear directorio para la base de datos (se mapeará a un volumen)
RUN mkdir -p /app/data
ENV DB_PATH=/app/data/algor.sqlite

EXPOSE 3030

# Comando para iniciar el servidor de Express
CMD ["npm", "start"]
