#!/usr/bin/env node
/**
 * Tests for node-dvorak
 */

var assert = require('assert'),
    dvorak = require('../'),
    str1 = 'Dvorak Test',
    str2 = 'Qwerty Test',
    str3 = 'Reverse Test',
    str4 = 'Symbol Test ! @ # $ % ^ & * ( ) { } [ ] ?';

console.log('Testing length');
assert.equal(dvorak.toQwerty(str1).length, str1.length);
assert.equal(dvorak.toDvorak(str2).length, str2.length);

console.log('Testing conversion from "%s" toQwerty', str1)
assert.equal(dvorak.toQwerty(str1), 'H.soav Kd;k');

console.log('Testing conversion from "%s" toDvorak', str2)
assert.equal(dvorak.toDvorak(str2), '",.pyf Y.oy');

console.log('Testing full conversion cycle with "%s"', str3)
assert.equal(dvorak.toDvorak(dvorak.toQwerty(str3)), str3);
assert.equal(dvorak.toQwerty(dvorak.toDvorak(str3)), str3);

console.log('Testing Symbols with "%s"', str4);
assert.equal(dvorak.toDvorak(dvorak.toQwerty(str4)), str4);
assert.equal(dvorak.toQwerty(dvorak.toDvorak(str4)), str4);
