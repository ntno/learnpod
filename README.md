# learnpod
### Chapters
+ chapter 1 - intro to html and javascript
+ chapter 2 - intro to css, separate javascript from html
+ chapter 3 - intro to jquery
+ chapter 4 - simple angular
+ chapter 5 - routing, single page application
  * requires python install
  * run using `python -m SimpleHTTPServer` then go to [local](http://127.0.0.1:8000/)
+ chapter 6 - jasmine unit testing
  * jasmine: open 'learnpod/chapter6/test/learnpodSpecRunner.html' in browser
+ chapter 7 - packaging with npm (javascript package manager)
  * requires npm (install with Homebrew on mac)
  * requires node (install with npm)
  * jasmine: open 'learnpod/chapter7/test/learnpodSpecRunner.html' in browser
  * karma: run using `node_modules/karma/bin/karma start` in 'learnpod'
  * run: `python -m SimpleHTTPServer` in 'learnpod' then go to [local](http://127.0.0.1:8000/chapter7/src/#!/)

### Step by Step
[see the process](https://github.com/ntno/learnpod/commits/master "individual commits")

### TODO
+ music
+ data import (csv)
+ database
+ REST
+ css3 responsive design(?)
+ bootstrap(?)

/*NOTE:
if you receive '[Errno 48] Address already in use' from `python -m SimpleHTTPServer`
run `ps -fA | grep python` then kill any SimpleHTTPServer processes
*/
