(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.instamedia = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _instamedia = require('./src/instamedia');

var instamedia = _interopRequireWildcard(_instamedia);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Same work.
// const instamedia = require('./instamedia');

// export default instamedia; //???
module.exports = instamedia;

},{"./src/instamedia":2}],2:[function(require,module,exports){
"use strict";

// _sharedData
function mediasFromTag(tag) {
  print(tag);
}

// Given a _sharedData from instagram script, return a JSON.

function instaJSONFromData(data) {
  console.log(data);
  return data;
}

function testFunction() {
  console.log(testFunction);
}

console.log("instamedia loaded");

module.exports = {
  instaJSONFromData: instaJSONFromData,
  mediasFromTag: mediasFromTag
};

},{}]},{},[1])(1)
});