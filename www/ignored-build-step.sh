#!/bin/bash

TARGET_URL="yamada-ui.com"
TARGET_BRANCH="main"

if [ "$VERCEL_PROJECT_PRODUCTION_URL" != "$TARGET_URL" ]; then
  echo "Run was canceled because '$VERCEL_PROJECT_PRODUCTION_URL' is not the target URL."
  exit 0
fi

if [ -n "$VERCEL_GIT_PULL_REQUEST_ID" ] && [ -n "$GITHUB_TOKEN" ]; then
  pr_json=$(curl -sS -f -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}/pulls/${VERCEL_GIT_PULL_REQUEST_ID}" 2>/dev/null) || true
  if [ -n "$pr_json" ] && printf '%s' "$pr_json" | grep -qE '"draft"[[:space:]]*:[[:space:]]*true[[:space:]]*[,}]'; then
    echo "Run was canceled because the pull request is a draft."
    exit 0
  fi
fi

if [ "$VERCEL_GIT_COMMIT_REF" == "$TARGET_BRANCH" ]; then
  git_diff_result=$(git diff --name-only HEAD^ HEAD)
else
  git fetch "https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}.git" $TARGET_BRANCH:$TARGET_BRANCH

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
