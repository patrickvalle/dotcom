
default: env

build:
	./node_modules/gulp/bin/gulp.js build

clean:
	./node_modules/gulp/bin/gulp.js clean

deploy:
	./node_modules/gulp/bin/gulp.js pre-deploy
	./node_modules/firebase-tools/lib/bin/firebase.js deploy --only functions --project fit-sanctum-157502

env:
	npm install
	npm install src
