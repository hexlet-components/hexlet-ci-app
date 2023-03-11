
setup: install build

install:
	npm install
  npx eslint

build:
	npm run build

start:
	npm start

test:
	npm test

make setup
make test
