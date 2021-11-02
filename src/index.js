import currencySettings from './currencies'

const formatMoney = (amount, currency, toCents = false) => {
  if (!amount || !currency) {

    return null
  }

  const currentCurrencySettings = currencySettings[currency.toUpperCase()]

  if (!currentCurrencySettings) {
    throw new Error('Config for this currency isn\'t specified')
  }

  const decimalPlacesFactor = 10 ** currentCurrencySettings.minorUnit

  return toCents
    ? Number((Math.ceil(amount) * decimalPlacesFactor).toFixed(0))
    : Number(Math.ceil(amount) / decimalPlacesFactor)
}

export default formatMoney
