"use strict";

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WITH_TWO_MINOR = 'USD';
var WITHOUT_MINOR = 'CLP';
describe('Money Formatter', function () {
  it('should return null if currency or amount isn\'t passed', function () {
    expect((0, _["default"])()).toBeNull();
    expect((0, _["default"])(1)).toBeNull();
    expect((0, _["default"])(null, WITH_TWO_MINOR)).toBeNull();
    expect((0, _["default"])(null, '', true)).toBeNull();
  });
  it('should throw error if currency isn\'t present in config', function () {
    expect(function () {
      return (0, _["default"])(1, 'WRONG_CURRENCY');
    }).toThrowError();
  });
  it('should correctly format money from cents ', function () {
    expect((0, _["default"])(1111, WITH_TWO_MINOR)).toEqual(11.11);
    expect((0, _["default"])(11110000000, WITH_TWO_MINOR)).toEqual(111100000.00);
    expect((0, _["default"])(1111, WITHOUT_MINOR)).toEqual(1111);
  });
  it('should correctly format money to cents ', function () {
    expect((0, _["default"])(1111, WITH_TWO_MINOR, true)).toEqual(111100);
    expect((0, _["default"])(11110000000, WITH_TWO_MINOR, true)).toEqual(1111000000000);
    expect((0, _["default"])(1111, WITHOUT_MINOR, true)).toEqual(1111);
  });
});