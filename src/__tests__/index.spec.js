import formatMoney from '../'

const WITH_TWO_MINOR = 'USD'
const WITHOUT_MINOR = 'CLP'

describe('Money Formatter', () => {
  it('should return null if currency or amount isn\'t passed', () => {
    expect(formatMoney()).toBeNull()
    expect(formatMoney(1)).toBeNull()
    expect(formatMoney(null, WITH_TWO_MINOR)).toBeNull()
    expect(formatMoney(null, '', true)).toBeNull()
  })

  it('should throw error if currency isn\'t present in config', () => {
    expect(() => formatMoney(1, 'WRONG_CURRENCY')).toThrowError()
  })

  it('should correctly format money from cents ', () => {
    expect(formatMoney(1111, WITH_TWO_MINOR)).toEqual(11.11)
    expect(formatMoney(1111, WITHOUT_MINOR)).toEqual(1111)
  })

  it('should correctly format money to cents ', () => {
    expect(formatMoney(1111, WITH_TWO_MINOR, true)).toEqual(111100)
    expect(formatMoney(1111, WITHOUT_MINOR, true)).toEqual(1111)
  })
})