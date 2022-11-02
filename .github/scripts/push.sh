#!/bin/bash
set -e

rsync -a --delete --exclude .git --exclude .gitignore ../dist/ .
git config --global user.email "github-actions[bot]@users.noreply.github.com"
git config --global user.name "github-actions[bot]"
git status

git add .
git commit -m "Update Website"
git push