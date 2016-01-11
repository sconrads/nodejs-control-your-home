# BUILD:
# docker build .

# TAG:
# docker tag -f ffa0fedcd070 control-my-home

# RUN:
# docker run --name control-my-home --restart=always -p 3000:3000 -d control-my-home

#FROM hypriot/rpi-node
FROM node
MAINTAINER Stian Conradsen <conradsen@gmail.com>

# Adding source files into container
ADD ./src /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Open Port 3000
EXPOSE 3000

# Run Node.js
CMD ["npm", "start"]
