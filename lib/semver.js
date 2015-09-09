"use strict";

var reSemver = /^v?((\d+)\.(\d+)\.(\d+))(?:-([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?(?:\+([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?$/

module.exports = {
  parseSemver: function(version) {
    var m = reSemver.exec(version) || [];

    if (0 === m.length) {
      return;
    } else {
      return {
        semver: m[0],
        version: m[1],
        major: m[2],
        minor: m[3],
        patch: m[4],
        release: m[5],
        build: m[6]      
      }
    }

    return ver;
  },
    
  stringifySemver: function(obj) {
    var str = '';
    str += obj.major || '0';
    str += '.';
    str += obj.minor || '0';
    str += '.';
    str += obj.patch || '0';
    if (obj.release) {
      str += '-' + obj.release;
    }
    if (obj.build) {
       str += '+' + obj.build;
    }
    return str;
  }  
}

