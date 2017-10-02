"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * High-level function to coordinate fetching data from Lever.co
 * site.
 */
var fetch = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var site = _ref.site,
        verbose = _ref.verbose,
        typePrefix = _ref.typePrefix;
    var entities, res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // return require(`./data.json`)

            entities = [];
            _context.prev = 1;
            _context.next = 4;
            return axios({
              method: `get`,
              url: `https://api.lever.co/v0/postings/${site}?mode=json`
            });

          case 4:
            res = _context.sent;

            entities = res.data;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);

            httpExceptionHandler(_context.t0);

          case 11:
            return _context.abrupt("return", entities);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function fetch(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require(`axios`);
var httpExceptionHandler = require(`./http-exception-handler`);
module.exports = fetch;