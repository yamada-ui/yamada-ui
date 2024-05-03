#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if "$VERCEL_GIT_COMMIT_REF" == "main"; then
  exit 1;
else
  git fetch https://github.com/yamada-ui/yamada-ui.git main

  if git diff --name-only FETCH_HEAD HEAD | grep -q "^docs/"; then
    exit 1;
  else
    exit 0;
  fi
fi
