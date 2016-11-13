.PHONY: test coverage

install:
	npm run setup

run:
	npm run start:dev

open:
	npm run app:view

build:
	npm run build

build-d:
	npm run build:dev

lint:
	npm run lint

lint-w:
	npm run lint:watch

clean:
	npm run clean

test:
	npm run lint
	npm run test

test-w:
	npm run test:watch

coverage:
	npm run coverage

coverage-v:
	npm run coverage:generate
	npm run coverage:view
