import moment, { MomentInput } from 'moment'
import { i18n } from '@/utils/i18n'

export interface UtilValidateProps {
  required: (
    value: string | number | Array<any> | boolean,
    field?: string,
    message?: string
  ) => boolean | string
  requiredSelected: (
    value: string | number | Array<any> | boolean,
    field?: string,
    message?: string
  ) => boolean | string
  email: (value: string, field: string) => boolean | string
  password: (value: string, field: string, message: string) => boolean | string
  checkNumberHalfSize: (value: string, field: string) => boolean | string
  checkOldDate: (value: MomentInput, field: string) => boolean | string
  checkLengthFromTo: (
    value: string,
    field: string,
    from: number,
    to: number
  ) => boolean | string
  checkLengthNumber: (
    value: string,
    field: string,
    length: number,
    otherField: string
  ) => boolean | string
  compare: (
    value: string,
    otherValue: string,
    field: string,
    otherField: string
  ) => boolean | string
  compareDifferent: (
    value: string | number,
    otherValue: string | number,
    field?: string,
    otherField?: string,
    message?: string
  ) => boolean | string
  hiragana: (value: string, field: string) => boolean | string
  url: (value: string, field: string) => boolean | string
  postcode: (value: string, field: string) => boolean | string
}

/**
 * Validate required
 * @param value
 * @param field
 * @param message
 * @returns
 */
const required = (
  value: string | number | Array<any> | boolean,
  field?: string,
  message?: string
) => {
  const contentMessage = field
    ? i18n.t('common.validate.cmnErr001', [field])
    : message

  if (typeof value === 'boolean') {
    return value || contentMessage
  }

  return (
    (typeof value === 'number'
      ? value && !!String(value)?.length
      : !!value?.length) || contentMessage
  )
}

const requiredSelected = (
  value: string | number | Array<any> | boolean,
  field?: string,
  message?: string
) => {
  const contentMessage = field
    ? i18n.t('common.validate.cmnErr002', [field])
    : message

  if (typeof value === 'boolean') {
    return value || contentMessage
  }

  return (
    (typeof value === 'number'
      ? value && !!String(value)?.length
      : !!value?.length) || contentMessage
  )
}

/* eslint-disable */
/**
 * Validate email address
 * @param value
 * @param field
 * @returns
 */
const email = (value: string, field: string) =>
  value
    ? /^[a-zA-Z]+([+._-]?[a-zA-Z\d]+)+\@[a-z\d]+[-]?[a-z\d]+(\.[a-z]{2,})+$/g.test(
        value
      ) || i18n.t('common.validate.cmnErr006', [field])
    : true
/* eslint-enable */
/**
 * Validate password
 * @param value
 * @param field
 * @returns
 */
const password = (value: string, field: string, message: string) =>
  (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(.*){8,255}$/g.test(value) &&
    value
      .split('')
      .every((item) => new TextEncoder().encode(item).length === 1)) ||
  i18n.t('common.validate.cmnErr003', [field, message])

/**
 * Check length value
 * @param value
 * @param field
 */
const checkNumberHalfSize = (value: string, field: string) => {
  return (
    /^[0-9]+$/g.test(value) ||
    i18n.t('common.validate.cmnErr003', [
      field,
      i18n.t('common.messages.numberHalfSizeFormat'),
    ])
  )
}

/**
 * Check length value
 * @param value
 * @param field
 * @param from
 * @param to
 */
const checkLengthFromTo = (
  value: string,
  field: string,
  from: number,
  to: number
) => {
  const length = value?.length || 0

  return (
    (length >= from && length <= to) ||
    i18n.t('common.validate.cmnErr005', [field, from, to])
  )
}

/**
 * Check length value
 * @param value
 * @param field
 * @param  length
 */
const checkLengthNumber = (
  value: string,
  field: string,
  length: number,
  otherField: string
) => {
  const inputLength = value?.length || 0

  return (
    inputLength === length ||
    i18n.t('common.validate.cmnErr003', [field, otherField])
  )
}

/**
 * Compare 2 value
 * @param value
 * @param otherValue
 * @param field
 * @param otherField
 * @returns
 */
const compare = (
  value: string,
  otherValue: string,
  field: string,
  otherField: string
) =>
  value === otherValue ||
  i18n.t('common.validate.cmnErr011', [field, otherField])

/**
 * Compare 2 value
 * @param value
 * @param otherValue
 * @param field
 * @param otherField
 * @returns
 */
const compareDifferent = (
  value: string | number,
  otherValue: string | number,
  field?: string,
  otherField?: string,
  message?: string
) =>
  value !== otherValue ||
  message ||
  i18n.t('common.validate.cmnErr016', [field, otherField])

/**
 * Hiragana format
 * @param value
 * @param field
 * @returns
 */
const hiragana = (value: string, field: string) =>
  /^[\u3040-\u309F\u3000\u30FC]*$/g.test(value) ||
  i18n.t('common.validate.cmnErr003', [
    field,
    i18n.t('common.inputType.fullWidth'),
  ])

/**
 * Url format
 * @param value
 * @param field
 * @returns
 */
const url = (value: string, field: string) =>
  /^https?:\/\/(([a-zA-Z0-9-]+(\.[a-zA-Z]+).*)|([\d]{1,3}(\.[\d]{1,3}){3}))(:[\d]{1,5})?(\/.*)?$/g.test(
    value
  ) || i18n.t('common.validate.cmnErr104', [field])

/**
 * check old date
 * @param value
 * @param field
 * @returns
 */
const checkOldDate = (value: MomentInput, field: string) => {
  return (
    moment(value).diff(moment()) >= 0 ||
    i18n.t('common.validate.cmnErr007', [field])
  )
}

/**
 * @param value
 * @param field
 */
const postcode = (value: string, field: string) => {
  return (
    /^[0-9]/g.test(value) ||
    i18n.t('common.validate.cmnErr016', [
      field,
      i18n.t('common.messages.postCodeFormat'),
    ])
  )
}

const validateRules: UtilValidateProps = {
  required,
  email,
  checkOldDate,
  password,
  checkNumberHalfSize,
  checkLengthFromTo,
  checkLengthNumber,
  compare,
  compareDifferent,
  hiragana,
  url,
  requiredSelected,
  postcode,
}

export default validateRules
