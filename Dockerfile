FROM node:argon

MAINTAINER Justin Anastos <justin.anastos@gmail.com>

# Add build utils (seems to be necessary for certain node-gyp commands)
RUN apt-get update && \
    apt-get install \
        -y \
        --no-install-recommends \
        build-essential \
        wget \
    && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Make sure we are running the latest version of npm
RUN npm install -g \
    npm@3.5.3

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.1.0/dockerize-linux-amd64-v0.1.0.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.1.0.tar.gz

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json npm-shrinkwrap.json /usr/src/app/
RUN npm install \
    --no-optional \
    --only=prod

CMD [ "./node_modules/.bin/babel-node", "index.js" ]

COPY . /usr/src/app
