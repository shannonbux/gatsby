"use strict";

var colorized = require(`./output-color`);

/**
 * Handles HTTP Exceptions (axios)
 *
 * @param {any} e
 */
function httpExceptionHandler(e) {
  var _e$response = e.response,
      status = _e$response.status,
      statusText = _e$response.statusText,
      message = _e$response.data.message;

  console.log(colorized.out(`The server response was "${status} ${statusText}"`, colorized.color.Font.FgRed));
  if (message) {
    console.log(colorized.out(`Inner exception message : "${message}"`, colorized.color.Font.FgRed));
  }
}

module.exports = httpExceptionHandler;