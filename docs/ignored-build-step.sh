#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [ "$VERCEL_GIT_COMMIT_REF" == "main" ]; then
  echo "Run because the committed branch is 'main'."
  exit 1
else
  git fetch https://github.com/yamada-ui/yamada-ui.git main

  git_diff_result=$(git diff --name-only $(git merge-base HEAD main) HEAD)

  echo "$git_diff_result"

  if echo "$git_diff_result" | grep -q "^docs/"; then
    echo "Run because './docs' is included in the difference with the 'main' branch."
    exit 1
  else
    echo "Run was canceled because './docs' was not included in the difference with the 'main' branch."
    exit 0
  fi
fi
