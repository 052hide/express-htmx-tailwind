FROM debian:stable-slim

COPY ./ /work/app

WORKDIR /work/app

# curl and ca-certificates are needed for volta installation
RUN apt-get update \
  && apt-get install -y \
  curl \
  ca-certificates \
  --no-install-recommends

# bash will load volta() function via .bashrc
# using $VOLTA_HOME/load.sh
SHELL ["/bin/bash", "-c"]

# since we're starting non-interactive shell,
# we wil need to tell bash to load .bashrc manually
ENV BASH_ENV ~/.bashrc
# needed by volta() function
ENV VOLTA_HOME /root/.volta
# make sure packages managed by volta will be in PATH
ENV PATH $VOLTA_HOME/bin:$PATH

# install volta
RUN curl https://get.volta.sh | bash
RUN volta install node
RUN volta install yarn

# test that volta manages node/yarn version
RUN yarn
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
