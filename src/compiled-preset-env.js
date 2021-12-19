"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _util = require("@/util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var $target = (0, _util.$)('#root');
var template = "\n    <h1> 1 + 2 = ".concat((0, _util.add)(1, 2), "</h1>\n"); // 폴리필 트랜스파일링 테스트 용

var foo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve(1);

          case 2:
            res = _context.sent;
            console.log('res');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function foo() {
    return _ref.apply(this, arguments);
  };
}();

foo();
$target.innerHTML = template;
