# set base image (host OS)
FROM python:3.7

# use bash for better scripting
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# install base utilities
RUN apt-get -y update && apt-get install -y curl nano wget nginx git

# install Node.js + Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

# environment variables
ENV ENV_TYPE=staging
ENV MONGO_HOST=mongo
ENV MONGO_PORT=27017
ENV PYTHONPATH=$PYTHONPATH:/src/

# copy Python requirements
COPY src/requirements.txt /tmp/requirements.txt

# install Python dependencies
RUN pip install -r /tmp/requirements.txt

# set working directory
WORKDIR /src

# copy app dependencies (React)
COPY src/app/package.json src/app/yarn.lock /tmp/app/
RUN cd /tmp/app && yarn install

# copy all source code
COPY src/ /src/
