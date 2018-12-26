
default: env

clean:
	rm -r dist

env:
	npm install --save-dev gulp

build:
	./node_modules/gulp/bin/gulp.js build
