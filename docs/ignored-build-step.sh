#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [ "$VERCEL_GIT_COMMIT_REF" == "main" ]; then
  exit 1;
else
  git fetch https://github.com/yamada-ui/yamada-ui.git main

  git diff --name-only FETCH_HEAD HEAD

  git diff FETCH_HEAD HEAD --quiet -- ./docs

  if [ $? -eq 0 ]; then
    echo "stop"
    exit 0;
  else
    echo "run"
    exit 1;
  fi
fi
