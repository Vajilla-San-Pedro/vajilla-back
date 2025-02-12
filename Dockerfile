# Usar una imagen base de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de tu aplicación al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto en el que tu app se ejecuta
EXPOSE 5001

# Comando para iniciar tu aplicación
CMD ["npm", "run", "dev"]
