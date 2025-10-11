#!/bin/bash

TARGET_URL="yamada-ui.com"
TARGET_BRANCH="main"

if [ "$VERCEL_PROJECT_PRODUCTION_URL" != "$TARGET_URL" ]; then
  echo "Run was canceled because '$VERCEL_PROJECT_PRODUCTION_URL' is not the target URL."
  exit 0
fi

if [ "$VERCEL_GIT_COMMIT_REF" == "$TARGET_BRANCH" ]; then
  git_diff_result=$(git diff --name-only HEAD^ HEAD)
else
  git fetch https://github.com/yamada-ui/yamada-ui.git $TARGET_BRANCH:$TARGET_BRANCH

  git_diff_result=$(git diff --name-only $(git merge-base HEAD $TARGET_BRANCH) HEAD)
fi

echo "$git_diff_result"

if echo "$git_diff_result" | grep -q "^www/"; then
  echo "Run because './www' is included in the difference."
  exit 1
else
  echo "Run was canceled because './www' was not included in the difference."
  exit 0
fi
