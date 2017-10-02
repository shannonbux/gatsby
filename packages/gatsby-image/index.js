"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var io = void 0;
var listeners = [];
if (typeof window !== "undefined" && window.IntersectionObserver) {
  io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      listeners.forEach(function (l) {
        if (l[0] === entry.target) {
          if (entry.isIntersecting) {
            io.unobserve(l[0]);
            l[1]();
          }
        }
      });
    });
  }, { rootMargin: "200px" });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  io.observe(el);
  listeners.push([el, cb]);
};

var Img = function Img(props) {
  var opacity = props.opacity,
      onLoad = props.onLoad,
      otherProps = (0, _objectWithoutProperties3.default)(props, ["opacity", "onLoad"]);

  return _react2.default.createElement("img", (0, _extends3.default)({}, otherProps, {
    onLoad: onLoad,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transition: "opacity 0.5s",
      opacity: opacity,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  }));
};

Img.propTypes = {
  opacity: _propTypes2.default.number,
  onLoad: _propTypes2.default.func
};

var Image = function (_React$Component) {
  (0, _inherits3.default)(Image, _React$Component);

  function Image(props) {
    (0, _classCallCheck3.default)(this, Image);

    // If this browser doesn't support the IntersectionObserver API
    // we just start downloading the image right away.
    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    var isVisible = true;
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
    }

    _this.state = {
      isVisible: isVisible
    };

    _this.handleRef = _this.handleRef.bind(_this);
    return _this;
  }

  Image.prototype.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (window.IntersectionObserver && ref) {
      listenToIntersections(ref, function () {
        _this2.setState({ isVisible: true, imgLoaded: false });
      });
    }
  };

  Image.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        title = _props.title,
        alt = _props.alt,
        className = _props.className,
        style = _props.style,
        responsiveSizes = _props.responsiveSizes,
        responsiveResolution = _props.responsiveResolution,
        backgroundColor = _props.backgroundColor;


    if (responsiveSizes) {
      var image = responsiveSizes;
      return _react2.default.createElement(
        "div",
        {
          className: (className ? className : "") + " gatsby-image-wrapper",
          style: (0, _extends3.default)({
            position: "relative",
            overflow: "hidden"
          }, style),
          ref: this.handleRef
        },
        _react2.default.createElement("div", {
          style: {
            width: "100%",
            paddingBottom: 100 / image.aspectRatio + "%"
          }
        }),
        image.base64 && _react2.default.createElement(Img, { alt: alt, title: title, src: image.base64, opacity: 1 }),
        backgroundColor && _react2.default.createElement("div", {
          title: title,
          style: {
            backgroundColor: backgroundColor,
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
          }
        }),
        this.state.isVisible && _react2.default.createElement(Img, {
          alt: alt,
          title: title,
          srcSet: image.srcSet,
          src: image.src,
          sizes: image.sizes,
          opacity: this.state.imgLoaded || this.props.fadeIn === false ? 1 : 0,
          onLoad: function onLoad() {
            return _this3.setState({ imgLoaded: true });
          }
        })
      );
    }

    if (responsiveResolution) {
      var _image = responsiveResolution;
      return _react2.default.createElement(
        "div",
        {
          className: (className ? className : "") + " gatsby-image-wrapper",
          style: (0, _extends3.default)({
            position: "relative",
            overflow: "hidden",
            width: _image.width,
            height: _image.height,
            background: "lightgray"
          }, style),
          ref: this.handleRef
        },
        _image.base64 && _react2.default.createElement(Img, { alt: alt, title: title, src: _image.base64, opacity: 1 }),
        backgroundColor && _react2.default.createElement("div", {
          title: title,
          style: {
            backgroundColor: backgroundColor,
            width: _image.width,
            height: _image.height
          }
        }),
        this.state.isVisible && _react2.default.createElement(Img, {
          alt: alt,
          title: title,
          width: _image.width,
          height: _image.height,
          srcSet: _image.srcSet,
          src: _image.src,
          opacity: this.state.imgLoaded || this.props.fadeIn === false ? 1 : 0,
          onLoad: function onLoad() {
            return _this3.setState({ imgLoaded: true });
          }
        })
      );
    }

    return null;
  };

  return Image;
}(_react2.default.Component);

Image.defaultProps = {
  fadeIn: true,
  alt: ""
};

Image.propTypes = {
  responsiveResolution: _propTypes2.default.object,
  responsiveSizes: _propTypes2.default.object,
  fadeIn: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]), // Support Glamor's css prop.
  style: _propTypes2.default.object,
  backgroundColor: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]) // Support Glamor's css prop.
};

exports.default = Image;