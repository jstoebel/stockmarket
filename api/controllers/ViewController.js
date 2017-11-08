'use strict'
const path = require('path');
const Controller = require('trails/controller');

/**
 * @module ViewController
 * @description View.
 */
module.exports = class ViewController extends Controller {
  helloWorld(req, res) {
   res.send('hello world')
  }

  main(req, res) {
    res.sendFile(path.join(__dirname + '/../../public/index.html'));
  }
}

