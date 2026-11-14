#!/usr/bin/env bash
set -euo pipefail

apt-get update
apt-get install -y --no-install-recommends ca-certificates curl git build-essential python3 pkg-config
curl --fail --show-error --silent --location https://mise.run | sh
export PATH="$HOME/.local/bin:$PATH"
mise trust
mise install node pnpm
mise exec -- pnpm config set store-dir .pnpm-store
mise run setup
