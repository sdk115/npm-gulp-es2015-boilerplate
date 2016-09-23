(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.yourprojectname = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _yourprojectname = require('./src/yourprojectname.js');

var YOUR_PROJECTNAME = _interopRequireWildcard(_yourprojectname);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Same work.
// const YOUR_PROJECTNAME = require('./YOUR_PROJECTNAME');

// export default YOUR_PROJECTNAME; //???
module.exports = YOUR_PROJECTNAME;

},{"./src/yourprojectname.js":2}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Given a _sharedData from instagram script, return a JSON.

var YourClass = (function () {
  function YourClass(say) {
    _classCallCheck(this, YourClass);

    this.say = say;
  }

  _createClass(YourClass, [{
    key: 'speak',
    value: function speak() {
      console.log('I am saying: ' + this.say);
    }
  }]);

  return YourClass;
})();

function areYouHappy(bool) {
  if (bool) {
    console.log('I am happy.');
  } else {
    console.log('I want to be happy.');
  }
}

module.exports = {
  YourClass: YourClass,
  areYouHappy: areYouHappy
};

},{}]},{},[1])(1)
});