import currencySettings from './currencies'

/**
 * @param {number} amount - Amount in minor places
 * @param {string} currency - Currency code
 * @param {boolean} toCents - Format with cents
 *
 * @returns {?string}
 */
const formatMoney = (amount: number, currency: string, toCents: boolean = false) => {
  if (!amount || !currency) {
    console.error('Amount or currency wasn\'t provided to money formatter')

    return null
  }

  const currentCurrencySettings = currencySettings[currency.toUpperCase()]
  const decimalPlacesFactor = 10 ** currentCurrencySettings.minorUnit

  return toCents
    ? Number((~~amount * decimalPlacesFactor).toFixed(0))
    : Number(~~amount / decimalPlacesFactor)
}

export default formatMoney
