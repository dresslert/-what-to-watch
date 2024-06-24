# Usar uma imagem oficial do Node.js
FROM node:16

# Criar e definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Instalar nodemon globalmente para facilitar o desenvolvimento
RUN npm install -g nodemon

# Instalar as dependências do projeto
#COPY package*.json ./
RUN npm install

# Copiar o restante do código do aplicativo (a ser criado posteriormente)
COPY . .

# Expor a porta que o aplicativo usará
EXPOSE 5000

# Comando para rodar o aplicativo
CMD ["tail", "-f", "/dev/null"]
