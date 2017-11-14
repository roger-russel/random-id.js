FROM node:9
MAINTAINER Roger Russel <roger@rrussel.org>
ENV TERM=xterm

WORKDIR /opt/randomidjs

RUN apt-get update && apt-get install -y \
  git \
  zip \
  unzip \
  curl \
  build-essential \
  && rm -rf /var/lib/apt/lists/*

CMD tail -f /dev/null
