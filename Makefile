all: development

clean:
	@test -d build && rm -r build || true

deps:
	@npm install

development: clean deps
	./node_modules/.bin/webpack-dev-server --inline --hot --content-base .

production: clean deps
	webpack