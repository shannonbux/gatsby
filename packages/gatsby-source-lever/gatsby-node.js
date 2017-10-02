"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = require(`./fetch`);
var normalize = require(`./normalize`);

var typePrefix = `lever__`;

exports.sourceNodes = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref, _ref2) {
    var boundActionCreators = _ref.boundActionCreators,
        getNode = _ref.getNode,
        store = _ref.store,
        cache = _ref.cache;
    var site = _ref2.site,
        verboseOutput = _ref2.verboseOutput;
    var createNode, entities;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode;
            _context.next = 3;
            return fetch({
              site,
              verboseOutput,
              typePrefix
            });

          case 3:
            entities = _context.sent;


            // Normalize data & create nodes
            //
            // Creates entities from object collections of entities
            entities = normalize.normalizeEntities(entities);

            // Standardizes ids & cleans keys
            entities = normalize.standardizeKeys(entities);

            // Converts to use only GMT dates
            entities = normalize.standardizeDates(entities);

            // creates Gatsby IDs for each entity
            entities = normalize.createGatsbyIds(entities);

            // creates nodes for each entry
            normalize.createNodesFromEntities({ entities, createNode });

            return _context.abrupt("return");

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();