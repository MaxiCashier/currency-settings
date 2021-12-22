import currencies from './currencies'

const formatMoney = (amount: number, currency: keyof typeof currencies, toCents = false) => {
  if (!amount || !currency) {

    return null
  }

  const currentCurrencySettings = currencies[currency.toUpperCase() as keyof typeof currencies]

  if (!currentCurrencySettings) {
    throw new Error('Config for this currency isn\'t specified')
  }

  const decimalPlacesFactor = 10 ** currentCurrencySettings.minorUnit

  return toCents
    ? Number((Math.ceil(amount) * decimalPlacesFactor).toFixed(0))
    : Number(Math.ceil(amount) / decimalPlacesFactor)
}

export const formatMoneyToString = (amount: number, currency: keyof typeof currencies) => {
  const numberMoney = formatMoney(amount, currency)

  if (!numberMoney) return null

  const splitByParts = numberMoney
    ?.toFixed(currencies[currency.toUpperCase() as keyof typeof currencies]?.minorUnit)
    .split('.')

  splitByParts[0] = splitByParts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')

  return splitByParts.join('.')
}

export default formatMoney
