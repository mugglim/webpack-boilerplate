"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _util = require("@/util");

var $target = (0, _util.$)('#root');
var template = "\n    <h1> 1 + 2 = ".concat((0, _util.add)(1, 2), "</h1>\n"); // 폴리필 트랜스파일링 테스트 용

var foo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var res;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise.default.resolve(1);

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
