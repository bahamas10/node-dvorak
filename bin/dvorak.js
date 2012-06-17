#!/usr/bin/env node
/**
 * Convert between dvorak and qwerty on
 * the command line
 */

var dvorak = require('dvorak'),
    func;

// Figure out the function to use
if (process.argv[2] == 'qwerty') {
  func = dvorak.toQwerty;
} else {
  func = dvorak.toDvorak;
}

// Read stdin
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
   process.stdout.write(func(chunk));
});
