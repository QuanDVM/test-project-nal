export interface ConstantCommonProps {
  LOCALE: 'ja'

  EMPTY_STRING: string

  DATE_TIME_SLASH: string

  DATE_TIME_SECOND_FORMAT: string

  DATE_TIME_FORMAT: string

  DATE_TIME_FORMAT_HYPEN: string

  PAGE_SIZES: Array<number>

  SORT_ORDER: {
    ASC: 'asc'
    DESC: 'desc'
  }

  DATE_FORMAT: string

  CAPITAL_CALLER_REGISTER_IMAGE_UPLOAD: {
    FILE_SIZE_LIMIT: number
    FILE_TYPE: string
  }

  CAPITAL_CALLER_PROJECT_FILE_UPLOAD: {
    FILE_SIZE_LIMIT: number
    FILE_TYPE: string
  }

  RANGE_MONTH: number
  PREF_ID_DEFAULT: number
  PROJECT_TYPE_DEFAULT: number
}

const constants: ConstantCommonProps = {
  EMPTY_STRING: '-',

  DATE_TIME_SLASH: 'YYYY/MM/DD',

  DATE_TIME_SECOND_FORMAT: 'YYYY/MM/DD HH:mm:ss',

  DATE_TIME_FORMAT_HYPEN: 'YYYY-MM-DD HH:mm',

  LOCALE: 'ja',

  DATE_TIME_FORMAT: 'YYYY/MM/DD hh:mm',

  DATE_FORMAT: 'YYYY-MM-DD',

  PAGE_SIZES: [50, 100, 200],

  SORT_ORDER: {
    ASC: 'asc',
    DESC: 'desc',
  },

  CAPITAL_CALLER_REGISTER_IMAGE_UPLOAD: {
    FILE_SIZE_LIMIT: 10,
    FILE_TYPE: 'image/png,image/jpeg',
  },

  CAPITAL_CALLER_PROJECT_FILE_UPLOAD: {
    FILE_SIZE_LIMIT: 5,
    FILE_TYPE: 'application/pdf,image/png,image/jpeg',
  },

  RANGE_MONTH: 12,
  PREF_ID_DEFAULT: 0,
  PROJECT_TYPE_DEFAULT: 0,
}

export default constants
