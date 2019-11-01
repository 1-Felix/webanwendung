# Use a lighter version of Node as a parent image
FROM node:10.17.0-alpine

# Set the working directory to /server
WORKDIR /server

# copy package.json into the container at /server
COPY package*.json /server/
# Weil Bcrypt probleme macht
# https://github.com/kelektiv/node.bcrypt.js/wiki/Installation-Instructions#docker
# RUN apk --no-cache add --virtual native-deps \
#   g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
#   npm install --quiet node-gyp -g
# install dependencies
RUN npm install --quiet --production

# Weil es Bcrypt immer noch Probleme macht...
# RUN npm rebuild bcrypt --build-from-source .

# Copy the current directory contents into the container at /server
COPY . /server/

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["npm", "start"]
