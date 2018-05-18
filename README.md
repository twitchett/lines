# lines

Experiments with the lovely [Quil](https://github.com/quil/quil).

## Running Locally

Run `lein figwheel` in your terminal. Wait for a while until you see `Successfully compiled "resources/public/js/main.js"`. Open [localhost:3449](http://localhost:3449) in your browser. Behold!

## Tests

Yes. They are run using Karma, in either Chrome or PhantomJS. 

### Prerequisites

1. Install dependencies with `npm install`
2. Start the Karma server with `./node_modules/karma/bin/karma start`

### To run once

Compile the code and trigger a Karma run with:

```
lein test
```

### To run automatically

Compile and watch:

```
lein cljsbuild auto test
```

The tests will re-run upon file changes.


## Publishing

Before you publish your sketch, run `lein cljsbuild once optimized`. This will compile your code and run Google Closure Compiler with advanced optimizations. Take `resources/public/index.html` and `resources/public/js/main.js` and upload them to server of your choice.
