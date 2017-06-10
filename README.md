# learnpod
### Chapters
+ chapter 1 - intro to html and javascript
+ chapter 2 - intro to css, separate javascript from html
+ chapter 3 - intro to jquery
+ chapter 4 - simple angular
+ chapter 5 - routing, single page application
  * **_requires python_**
  *  *run:* `python -m SimpleHTTPServer` in 'chapter05' then go to [local](http://127.0.0.1:8000/)
+ chapter 6 - jasmine unit testing
  * *jasmine:* open 'learnpod/chapter06/test/learnpodSpecRunner.html' in browser
+ chapter 7 - packaging with npm & code coverage with karma
  * **_requires npm_**
  * *setup:* `npm install`
  * *run:* `npm start`
  * *spec reults:* open 'learnpod/chapter07/test/learnpodSpecRunner.html' in browser
  * *coverage results:* `npm test` then open 'learnpod/chapter07/test/coverage/report-html/js/index.html' in browser
+ chapter 8 - REST (giphy)
+ chapter 9 - jshint & npm script cleanup
  * *code quality check* `npm run lint`
  * *run jasmine specs from command line* `npm run karma`
  * *run linter then specs* `npm test`


### Step by Step
[see the process](https://github.com/ntno/learnpod/commits/master "individual commits")

### TODO
+ print to chrome console via processing script
+ pass arguments to karma conf / npm scripts
  * pass chapter# to linter/test runner
  * pass specific spec to test runner
  * pass specific file to linter
+ 7 scripts
+ fancify readme
+ data import (csv)
+ database
+ node
+ css3 responsive design(?)
+ bootstrap(?)
+ music
+ animation

### NOTE:
if you receive `'[Errno 48] Address already in use'` from `python -m SimpleHTTPServer`
run `ps -fA | grep python` then kill any SimpleHTTPServer processes
