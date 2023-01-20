"use strict";

var _pinia = require("pinia");

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

require("./assets/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _vue.createApp)(_App["default"]).use((0, _pinia.createPinia)()).mount("#app");