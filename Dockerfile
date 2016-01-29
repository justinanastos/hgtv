FROM node:argon

MAINTAINER Justin Anastos <justin.anastos@gmail.com>

# Add build utils (seems to be necessary for certain node-gyp commands)
RUN apt-get update && \
    apt-get install \
        -y \
        --no-install-recommends \
        build-essential \
    && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Make sure we are running the latest version of npm
RUN npm install -g \
    npm@3.5.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

CMD [ "npm", "start" ]

COPY package.json npm-shrinkwrap.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

