export interface UtilValidateProps {
  required: (
    value: string | number | Array<any> | boolean,
    field?: string,
    message?: string
  ) => boolean | string
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
  const contentMessage = field ? 'common.message.error.required' : message

  if (typeof value === 'boolean') {
    return value || contentMessage
  }

  return (
    (typeof value === 'number'
      ? value && !!String(value)?.length
      : !!value?.length) || contentMessage
  )
}

const validateRules: UtilValidateProps = {
  required,
}

export default validateRules
