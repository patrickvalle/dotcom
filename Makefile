
default: env

clean:
	rm -r dist

env:
	npm install

build:
	npx webpack
	# ./node_modules/gulp/bin/gulp.js build
