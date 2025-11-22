#!/bin/bash
set -e

# Build Zola site
zola build

# Wipe production repo contents
rm -rf ../grc-experimental.github.io/*

# Copy new build into production repo
cp -r public/* ../grc-experimental.github.io/

# Commit + push production
cd ../grc-experimental.github.io
git add .
git commit -m "Update site"
git push
