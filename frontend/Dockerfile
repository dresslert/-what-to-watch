# Usa a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Instala o Vue CLI globalmente
RUN npm install -g @vue/cli

# Copia o arquivo package.json para o diretório de trabalho
#COPY package*.json ./

# Instala as dependências do projeto
#RUN npm install

# Copia o restante do código fonte para o diretório de trabalho
COPY . .

# Expõe a porta 8080 para o servidor de desenvolvimento do Vue.js
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento do Vue.js
CMD ["tail", "-f", "/dev/null"]
