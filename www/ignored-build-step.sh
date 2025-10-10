#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

IGNORE_BRANCHES=("v1")
TARGET_BRANCH="main"

for branch in "${IGNORE_BRANCHES[@]}"; do
  if [ "$VERCEL_GIT_COMMIT_REF" == "$branch" ]; then
    echo "Run was canceled because '$VERCEL_GIT_COMMIT_REF' is in the ignore list."
    exit 0
  fi
done

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
