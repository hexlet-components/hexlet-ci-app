setup: install build

install:
	pnpm install

build:
	pnpm run build

start:
	npm start

test:
	pnpm test

lint:
	pnpm run lint
	pnpm --silent run format:check

lint-fix:
	pnpm run lint-fix

.PHONY: build
