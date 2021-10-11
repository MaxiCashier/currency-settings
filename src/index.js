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
    ? Number((~~amount * decimalPlacesFactor).toFixed(0))
    : Number(~~amount / decimalPlacesFactor)
}

export default formatMoney
