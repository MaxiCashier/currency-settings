// @ts-nocheck
import formatMoney, { formatMoneyToString } from '../'

const WITH_FOUR_MINOR = 'CLF'
const WITH_TWO_MINOR = 'USD'
const WITHOUT_MINOR = 'CLP'

describe('Money Formatter', () => {
  it('should return null if currency or amount isn\'t passed', () => {
    expect(formatMoney()).toBeNull()
    expect(formatMoney(1)).toBeNull()
    expect(formatMoney(null, WITH_TWO_MINOR)).toBeNull()
    expect(formatMoney(null, '', true)).toBeNull()

    expect(formatMoneyToString()).toBeNull()
    expect(formatMoneyToString(1)).toBeNull()
    expect(formatMoneyToString(null, WITH_TWO_MINOR)).toBeNull()
    expect(formatMoneyToString(null, '', true)).toBeNull()
  })

  it('should throw error if currency isn\'t present in config', () => {
    expect(() => formatMoney(1, 'WRONG_CURRENCY')).toThrowError()
    expect(() => formatMoneyToString(1, 'WRONG_CURRENCY')).toThrowError()
  })

  it('should correctly format money from cents ', () => {
    expect(formatMoney(1111, WITH_TWO_MINOR)).toEqual(11.11)
    expect(formatMoney(11110000000, WITH_TWO_MINOR)).toEqual(111100000.00)
    expect(formatMoney(1111, WITHOUT_MINOR)).toEqual(1111)
  })

  it('should correctly format money to cents ', () => {
    expect(formatMoney(1111, WITH_TWO_MINOR, true)).toEqual(111100)
    expect(formatMoney(11110000000, WITH_TWO_MINOR, true)).toEqual(1111000000000)
    expect(formatMoney(1111, WITHOUT_MINOR, true)).toEqual(1111)
  })

  it('should correctly format money to string ', () => {
    expect(formatMoneyToString(111111, WITH_TWO_MINOR)).toEqual('1,111.11')
    expect(formatMoneyToString(1100, WITH_TWO_MINOR)).toEqual('11.00')
    expect(formatMoneyToString(1111, WITHOUT_MINOR)).toEqual('1,111')
    expect(formatMoneyToString(110, WITHOUT_MINOR)).toEqual('110')
    expect(formatMoneyToString(111111, WITH_FOUR_MINOR)).toEqual('11.1111')
    expect(formatMoneyToString(111111010, WITH_FOUR_MINOR)).toEqual('11,111.1010')
    expect(formatMoneyToString(1111000000, WITH_FOUR_MINOR)).toEqual('111,100.0000')
  })
})
