FROM mcr.microsoft.com/devcontainers/javascript-node:4-24-bookworm

USER root

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /tmp/yamada-ui

COPY . .

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable

RUN pnpm install --frozen-lockfile --ignore-scripts \
  && pnpm react exec playwright install-deps \
  && rm -rf /tmp/yamada-ui

RUN mkdir -p /workspaces && chown node:node /workspaces

USER node

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

WORKDIR /workspaces
