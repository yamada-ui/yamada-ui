FROM mcr.microsoft.com/devcontainers/javascript-node:4-24-bookworm

USER root

ENV DEBIAN_FRONTEND=noninteractive

RUN npx -y playwright@1.59.1 install-deps chromium firefox webkit

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable

RUN mkdir -p /workspaces && chown node:node /workspaces

USER node

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

WORKDIR /workspaces
