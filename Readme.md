
# alias-property

  create robust aliases for an object's properties

## Installation

_With [packin](//github.com/jkroso/packin) or [component](//github.com/component/component)_

    $ packin add jkroso/alias-property

then in your app:

```js
var alias = require('alias-property')
```

## API

### alias(obj, to, from)

  create an alias from `from` to `to`

```js
var obj = {a:1};
alias(obj, 'a', 'b');
obj.a; // => 1
obj.b; // => 1
obj.b = 2;
obj.a; // => 2
obj.b; // => 2
obj.a = 3;
obj.a; // => 3
obj.b; // => 3
```

## Running the tests

Just run `make` and navigate your browser to the test directory.
