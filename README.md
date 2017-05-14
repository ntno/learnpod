# learnpod
### Chapters
+ chapter 1 - intro to html and javascript
+ chapter 2 - intro to css, separate javascript from html
+ chapter 3 - intro to jquery
+ chapter 4 - simple angular
+ chapter 5 - routing, single page application
  * requires python
  *  *run:* `python -m SimpleHTTPServer` in 'chapter5' then go to [local](http://127.0.0.1:8000/)
+ chapter 6 - jasmine unit testing
  * *jasmine:* open 'learnpod/chapter6/test/learnpodSpecRunner.html' in browser
+ chapter 7 - packaging with npm (javascript package manager) & karma
  * requires npm (install using Homebrew on mac)
  * *setup:* `npm install`
  * *run:* `npm start`
  * *jasmine:* open 'learnpod/chapter7/test/learnpodSpecRunner.html' in browser
  * *karma:*`npm test` then open 'learnpod/chapter7/test/coverage/Chrome 58.0.3029 (Mac OS X 10.12.4)/index.html' in the browser

### Step by Step
[see the process](https://github.com/ntno/learnpod/commits/master "individual commits")

### TODO
+ music
+ data import (csv)
+ database
+ REST
+ css3 responsive design(?)
+ bootstrap(?)

### NOTE:
if you receive `'[Errno 48] Address already in use'` from `python -m SimpleHTTPServer`
run `ps -fA | grep python` then kill any SimpleHTTPServer processes
