#!/usr/bin/env bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

rm -rf release && DEBUG=0 DIST=release "$DIR/package-build.sh" && \
npm publish release/