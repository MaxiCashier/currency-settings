"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _currencies = _interopRequireDefault(require("./currencies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formatMoney = function formatMoney(amount, currency) {
  var toCents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!amount || !currency) {
    return null;
  }

  var currentCurrencySettings = _currencies["default"][currency.toUpperCase()];

  if (!currentCurrencySettings) {
    throw new Error('Config for this currency isn\'t specified');
  }

  var decimalPlacesFactor = Math.pow(10, currentCurrencySettings.minorUnit);
  return toCents ? Number((~~amount * decimalPlacesFactor).toFixed(0)) : Number(~~amount / decimalPlacesFactor);
};

var _default = formatMoney;
exports["default"] = _default;