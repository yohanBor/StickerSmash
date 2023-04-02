# Définir l'image de base à utiliser
FROM node:18

# Créer un répertoire de travail pour l'application
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json vers le répertoire de travail
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install
RUN npm install --global @expo/ngrok@^4.1.0

# Copier les fichiers de l'application vers le répertoire de travail
COPY . .

# Exposer le port 19000 pour Expo
EXPOSE 19000

# Exposer le port 19001 pour le débogage Expo
EXPOSE 19001

# Exposer le port 19002 pour l'interface utilisateur Expo
EXPOSE 19002

# Démarrer l'application avec Expo
CMD ["npm", "start"]
