export interface UtilValidateProps {
  required: (value: string, message: string) => boolean | string
}

/**
 * Validate required
 * @param value
 * @param message
 * @returns
 */
const required = (value: string, message: string) => {
  return !!value?.length || message
}

const validateRules: UtilValidateProps = {
  required,
}

export default validateRules
