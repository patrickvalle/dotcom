
default: env

build:
	./node_modules/gulp/bin/gulp.js build

clean:
	./node_modules/gulp/bin/gulp.js clean

env:
	npm install
