#!/usr/bin/env bash

declare -a PROJECTS="${HOME}/projects"
declare -a ITEMS=(
  "module"
  "log2"

  "server"
  "server-api"
  "db"
  "i18"
  "mailer"
  "permit"
  "auth"
  "upload"
  "grant"
  "bots"

  "reactapp"
  "uapp"
)

for item in "${ITEMS[@]}"
do
  ./scripts/linkwatch.sh ${PROJECTS}/lskjs/packages/${item}/build `pwd`/packages/app/node_modules/@lskjs/${item} &
done



