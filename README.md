dvorak
======

Convert between the Qwerty and Dvorak keyboard layout

Install
------

Install locally to use as a madule

    npm install dvorak

Install globally to use the command-line tool dvorak(1)

    npm install -g dvorak

Usage
-----

as a module

``` js
var dvorak = require('dvorak');
```

as a command-line tool (conversion to dvorak is assumed)

    ~$ echo 'asdf' | ./dvorak
    aoeu
    ~$ echo 'aoeu' | ./dvorak qwerty
    asdf

Example
-------

``` js
> var dvorak = require('./index')
undefined
> dvorak.toQwerty('aoeu')
'asdf'
> dvorak.toDvorak('asdf')
'aoeu'
> dvorak.toDvorak('Gqm ktrglu sl a x,dokt vdtnsaoh a; gy gqm sl a h.soav patsfk')
'I\'m typing on a qwerty keyboard as if i\'m on a dvorak layout'
```

Tests
-----

    dave @ [ bahamas10 :: (Darwin) ] ~/dev/node-dvorak $ npm test

    > dvorak@0.0.0 test /Users/dave/dev/node-dvorak
    > node tests/test.js

    Testing length
    Testing conversion from "Dvorak Test" toQwerty
    Testing conversion from "Qwerty Test" toDvorak
    Testing full conversion cycle with "Reverse Test"
    Testing Symbols with "Symbol Test ! @ # $ % ^ & * ( ) { } [ ] ?"

License
-------

MIT Licensed
