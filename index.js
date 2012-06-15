/**
 * Characters taken from top to bottom, left to right
 */
var dvorak = '[]\',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz{}"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ',
    qwerty = '-=qwertyuiop[]asdfghjkl;\'zxcvbnm,./_+QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?';

/**
 * Private text translation function
 */
function convert(s, from, to) {
  ret = '';
  for (var i = 0; i < s.length; i++) {
    ret += to.charAt(from.indexOf(s.charAt(i))) || s.charAt(i);
  }
  return ret;
}

/**
 * Convert from qwerty to dvorak
 */
module.exports.toDvorak = function(s) {
  return convert(s, qwerty, dvorak);
}

/**
 * Convert from dvorak to qwerty
 */
module.exports.toQwerty = function(s) {
  return convert(s, dvorak, qwerty);
}
