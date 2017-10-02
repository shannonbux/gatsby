"use strict";

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

  console.log(`The server response was "${status} ${statusText}"`);
  if (message) {
    console.log(`Inner exception message : "${message}"`);
  }
}

module.exports = httpExceptionHandler;