#!/bin/bash

set -e

npm run build
git pull master
git add .
git commit -am "Update JS"
git push master