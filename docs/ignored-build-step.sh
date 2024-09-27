#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

TARGET_BRANCH="main"

if [ "$VERCEL_GIT_COMMIT_REF" == "$TARGET_BRANCH" ]; then
  git_diff_result=$(git diff --name-only HEAD^ HEAD)
else
  git fetch https://github.com/yamada-ui/yamada-ui.git $TARGET_BRANCH:$TARGET_BRANCH

  git_diff_result=$(git diff --name-only $(git merge-base HEAD $TARGET_BRANCH) HEAD)
fi

echo "$git_diff_result"

if echo "$git_diff_result" | grep -q "^docs/"; then
  echo "Run because './docs' is included in the difference."
  exit 1
else
  echo "Run was canceled because './docs' was not included in the difference."
  exit 0
fi
