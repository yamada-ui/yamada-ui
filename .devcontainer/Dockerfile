FROM mcr.microsoft.com/devcontainers/javascript-node:4-24-bookworm

USER root

ENV DEBIAN_FRONTEND=noninteractive

COPY packages/react/package.json /tmp/react-package.json

RUN PLAYWRIGHT_VERSION=$(node -p "const fs=require('fs'); const pkg=JSON.parse(fs.readFileSync('/tmp/react-package.json','utf8')); const raw = pkg.devDependencies?.playwright ?? pkg.dependencies?.playwright; const match = raw?.match(/[0-9]+\\.[0-9]+\\.[0-9]+/); if (!match) throw new Error('Playwright version not found in packages/react/package.json'); match[0]") \
  && npx -y "playwright@${PLAYWRIGHT_VERSION}" install-deps chromium firefox webkit \
  && rm -f /tmp/react-package.json

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable

RUN mkdir -p /workspaces && chown node:node /workspaces

USER node

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

WORKDIR /workspaces
