# lines

Experiments with the lovely [Quil](https://github.com/quil/quil).

## Developing

Run `lein figwheel` in your terminal. Wait for a while until you see `Successfully compiled "resources/public/js/main.js"`. Open [localhost:3449](http://localhost:3449) in your browser.

## Publishing

Before you publish your sketch, run `lein cljsbuild once optimized`. This will compile your code and run Google Closure Compiler with advanced optimizations. Take `resources/public/index.html` and `resources/public/js/main.js` and upload them to server of your choice.

## License

Copyright © 2018 Tabitha Goodall

Distributed under the Eclipse Public License version 1.0.
