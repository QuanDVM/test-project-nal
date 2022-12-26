import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import moment, { MomentInput } from 'moment'
import numeral from 'numeral'
import { i18n } from '@/utils/i18n'
import Constants from '@/constants'

const toCamelCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        camelCase(key),
        toCamelCase(val),
      ])
    )
  } else {
    return obj.map((el) => toCamelCase(el))
  }
}

const toSnakeCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        snakeCase(key),
        toSnakeCase(val),
      ])
    )
  } else {
    return obj.map((el) => toSnakeCase(el))
  }
}

const formatDate = (
  date: MomentInput,
  format: string = Constants.common.DATE_FORMAT
) => {
  return moment(date).locale(i18n.locale).format(format)
}

const formatDateSlash = (
  date: MomentInput,
  format: string = Constants.common.DATE_TIME_SLASH
) => {
  return moment(date).locale(i18n.locale).format(format)
}

const formatDateTime = (
  date: MomentInput,
  format: string = Constants.common.DATE_TIME_FORMAT
) => {
  return moment(date).locale(i18n.locale).format(format)
}

const formatDateTimeSecond = (
  date: MomentInput,
  format: string = Constants.common.DATE_TIME_SECOND_FORMAT
) => {
  return moment(date).format(format)
}

interface FormatTimeDurationReturn {
  days: string
  timeDuration: string
}

interface FormatTimeDurationProps {
  start: MomentInput
  end: MomentInput
}

const formatTimeDuration = ({ start, end }: FormatTimeDurationProps) => {
  const dateStart = moment(start)
  const dateEnd = moment(end)

  const days = numeral(dateEnd.diff(dateStart, 'days')).format('00')

  let timeDuration = numeral(
    dateEnd.subtract(days, 'days').diff(dateStart, 'seconds')
  ).format('00:00:00')
  const timeDurationArray = timeDuration.split(':')

  const [hours] = timeDurationArray
  const hoursFormat = Number(hours) > 10 ? hours : numeral(hours).format('00')

  timeDurationArray.splice(0, 1, hoursFormat)
  timeDuration = timeDurationArray.join(':')

  return { days, timeDuration }
}

const formatNumber = (value: number) => numeral(value || 0).format('0,0[.]00')

const formatNumberOrDefault = (
  value: number,
  defaultValue = Constants.common.EMPTY_STRING
) => (value && formatNumber(value)) || defaultValue

const getLastDigits = (value: number, size: number) =>
  String(value).slice(-size)

interface FullNameProps {
  lastName?: string
  firstName?: string
}

interface FullAddress {
  pref?: string
  address01?: string
  address02?: string
  address03?: string
}

interface FullInfoBankProps {
  bankName?: string
  branchName?: string
  accountTypeName?: string
  bankNumber?: string | number
}

const toFullName = ({ lastName, firstName }: FullNameProps) =>
  Object.values({ lastName, firstName }).filter(Boolean).join(' ')

const toAddress = ({ pref, address01, address02, address03 }: FullAddress) =>
  Object.values({ pref, address01, address02, address03 })
    .filter(Boolean)
    .join('')

const toFullInfoBank = ({
  bankName,
  branchName,
  accountTypeName,
  bankNumber,
}: FullInfoBankProps) =>
  Object.values({ bankName, branchName, accountTypeName, bankNumber })
    .filter(Boolean)
    .join(' ')

const chunkData = (data: string, size: number) => {
  const results = []
  let str = ''

  for (let i = 0; i < data.length; i++) {
    str += data.charAt(i)

    if (str.length === size || i === data.length - 1) {
      results.push(str)
      str = ''
    }
  }

  return results
}

const formatSortHeader = (field?: string, isDesc?: boolean) => {
  if (!field) return undefined

  const order = isDesc
    ? Constants.common.SORT_ORDER.DESC
    : Constants.common.SORT_ORDER.ASC

  const sortAsc = field
  const sortDesc = '-' + field

  return order === 'desc' ? sortDesc : sortAsc
}

const formatDateTimeHypen = (
  date: MomentInput,
  format: string = Constants.common.DATE_TIME_FORMAT_HYPEN
) => {
  return moment(date).format(format)
}

const formatDateTimeLocale = (date: MomentInput) => {
  return moment(date).format('LLL')
}

const isPartInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  const html = document.documentElement
  const myElementHeight = element.offsetHeight
  const myElementWidth = element.offsetWidth

  return (
    rect.top >= -myElementHeight &&
    rect.left >= -myElementWidth &&
    rect.right <= (window.innerWidth || html.clientWidth) + myElementWidth &&
    rect.bottom <= (window.innerHeight || html.clientHeight) + myElementHeight
  )
}

const formatNumberWithCommas = (number: string) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const formatDateRangeISO = (dates: Array<string | undefined>) => {
  const [after, before] = dates

  return [
    after ? moment(after).startOf('day').toISOString() : undefined,
    before ? moment(before).endOf('day').toISOString() : undefined,
  ]
}

export interface UtilHelperProps {
  toCamelCase: (obj: object) => any
  toSnakeCase: (obj: object) => any
  formatDate: (date: MomentInput, format?: string) => string
  formatDateTime: (date: MomentInput) => string
  formatDateTimeSecond: (date: MomentInput) => string
  formatDateSlash: (date: MomentInput, format?: string) => string
  chunkData: (data: string, size: number) => Array<string>
  formatTimeDuration: ({
    start,
    end,
  }: FormatTimeDurationProps) => FormatTimeDurationReturn
  formatNumber: (value: number) => string
  formatNumberOrDefault: (value: number, defaultValue: string) => string
  toFullName: (value: FullNameProps) => string
  toAddress: (value: FullAddress) => string
  toFullInfoBank: (value: FullInfoBankProps) => string
  getLastDigits: (value: number, size: number) => string
  formatSortHeader: (field?: string, isDesc?: boolean) => string | undefined
  formatDateTimeHypen: (date: MomentInput) => string
  formatDateTimeLocale: (date: MomentInput) => string
  isPartInViewport: (element: HTMLElement) => boolean
  formatNumberWithCommas: (number: string) => string
  formatDateRangeISO: (dates: Array<string>) => Array<string | undefined>
}

const helper: UtilHelperProps = {
  toCamelCase,
  toSnakeCase,
  formatDate,
  formatDateTime,
  formatDateTimeSecond,
  formatTimeDuration,
  formatNumber,
  formatNumberOrDefault,
  toFullName,
  toFullInfoBank,
  toAddress,
  chunkData,
  getLastDigits,
  formatSortHeader,
  formatDateTimeHypen,
  formatDateTimeLocale,
  formatDateSlash,
  isPartInViewport,
  formatNumberWithCommas,
  formatDateRangeISO,
}

export default helper
