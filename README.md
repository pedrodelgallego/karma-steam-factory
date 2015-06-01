karma-steam-factory
===================

Installation
------------

Install the module via npm

```sh
$ npm install --save-dev karma-steam-factory
```

Add `steam-factory` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'steam-factory'],
    
    ...
    
    plugins : [
      'karma-steam-factory',
       ....
    ]
  });
}
```
