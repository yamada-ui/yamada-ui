#!/bin/bash

TARGET_URL="yamada-ui.com"

if [ "$VERCEL_ENV" != "production" ]; then
  exit 0
fi

if [ "$VERCEL_PROJECT_PRODUCTION_URL" != "$TARGET_URL" ]; then
  echo "Run was canceled because '$VERCEL_PROJECT_PRODUCTION_URL' is not the target URL."
  exit 0
fi

cd "$(git rev-parse --show-toplevel)" || exit 1

if [ -z "$VERCEL_GIT_PREVIOUS_SHA" ] || ! git merge-base --is-ancestor "$VERCEL_GIT_PREVIOUS_SHA" HEAD 2>/dev/null; then
  echo "Run because the previous successful deployment is unavailable or is not an ancestor."
  exit 1
fi

if [ "$VERCEL_GIT_PREVIOUS_SHA" == "$(git rev-parse HEAD)" ]; then
  echo "Run because the current commit is being redeployed."
  exit 1
fi

turbo_version=$(node -p 'const pkg = require("./package.json"); pkg.devDependencies?.turbo ?? pkg.dependencies.turbo') || exit 1

if npx --yes "turbo@$turbo_version" query affected --tasks build:next --packages www --base "$VERCEL_GIT_PREVIOUS_SHA" --head HEAD --exit-code; then
  echo "Run was canceled because the www build is unaffected."
  exit 0
else
  echo "Run because the www build is affected or change detection failed."
  exit 1
fi
