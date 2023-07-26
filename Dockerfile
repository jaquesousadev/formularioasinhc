# Use a imagem do Node.js como a imagem base
FROM node:18
# Define o diretório de trabalho como /app
WORKDIR /src
# Copia o package.json e package-lock.json (ou yarn.lock) para o contêiner
COPY package*.json ./
# Instala as dependências do projeto
RUN npm install
# Copia todos os arquivos do projeto para o contêiner
COPY . .
# Comando para construir o projeto Next.js
RUN npm run build
# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]

# Estágio 2: Criar a imagem final com o servidor Nginx
FROM nginx:latest

# Copiar a build do Next.js do Estágio 1 para o diretório de publicação do Nginx
COPY --from=builder /src/out /usr/share/nginx/html

# Configurar o arquivo de configuração do Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para acesso externo
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]




