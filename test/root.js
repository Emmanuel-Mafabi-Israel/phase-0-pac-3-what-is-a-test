/*
    GLORY BE TO GOD,
    Javascript Testing,
    By Israel Mafabi Emmanuel

    //"jsdom": "^18.1.0",
*/

global.expect = require('expect');

const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');

jsdom({ src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8') });