#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_TARGET_ENV: $VERCEL_TARGET_ENV"
echo "VERCEL_GIT_REPO_SLUG: $VERCEL_GIT_REPO_SLUG"
echo "VERCEL_URL: $VERCEL_URL"
echo "VERCEL_BRANCH_URL: $VERCEL_BRANCH_URL"
echo "VERCEL_PROJECT_PRODUCTION_URL: $VERCEL_PROJECT_PRODUCTION_URL"

TARGET_BRANCH="main"

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
