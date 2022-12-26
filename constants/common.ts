export interface ConstantCommonProps {
  TEST: string
  ACCESS_TOKEN_KEY: string

  REFRESH_TOKEN_KEY: string

  TOKEN_AGE: number

  REFRESH_TOKEN_AGE: number

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

  PROVIDERS: {
    INVESTOR: 'investors'
    CAPITAL_CALLER: 'capital_caller'
    STAFF: 'staff'
  }

  TYPE_REGISTER_INVESTOR: {
    PERSONAL: 1
    CORPORATE: 2
  }

  STEP_TYPE: {
    INVESTOR: 'investor'
    CAPITAL_CALLER: 'capitalCaller'
    INQUIRY: 'inquiry'
    PROJECT: 'project'
  }

  INVESTOR_REGISTER_STEP: {
    CONFIRM_AND_AGREEMENT: number
    SUITABILITY: number
    INPUT_INFORMATION: number
    SUBMIT_KYC: number
    CONFIRM_INFORMATION: number
    COMPLETE: number
  }

  CAPITAL_CALLER_REGISTER_STEP: {
    CONFIRM_AND_AGREEMENT: number
    INPUT_INFORMATION: number
    CONFIRM_INFORMATION: number
    COMPLETE: number
  }

  INQUIRY_REGISTER_STEP: {
    INPUT_INFORMATION: number
    CONFIRM_INFORMATION: number
    COMPLETE: number
  }

  PROJECT_REGISTER_STEP: {
    CONFIRM_DOCUMENT: number
    CONFIRM_INFORMATION: number
    COMPLETE: number
  }

  CAPITAL_CALLER_REGISTER_IMAGE_UPLOAD: {
    FILE_SIZE_LIMIT: number
    FILE_TYPE: string
  }

  CAPITAL_CALLER_PROJECT_FILE_UPLOAD: {
    FILE_SIZE_LIMIT: number
    FILE_TYPE: string
  }

  GENDER: {
    MALE: number
    FEMALE: number
  }

  ACCOUNT_TYPE: {
    USUALLY: number
    CURRENT: number
    SAVINGS: number
  }

  ANSWERS: {
    NO: boolean
    YES: boolean
  }

  BANK_CODE_DEFAULT: Array<string>

  RANGE_MONTH: number
  MASTER_DATA_KEY: Array<string>
  PREF_ID_DEFAULT: number
  PROJECT_TYPE_DEFAULT: number

  STATUS_CODE: {
    OK: number
    PAGE_NOT_FOUND: number
    UNAUTHORIZED: number
    FORBIDDEN: number
    SYSTEM_ERROR: number
    BAD_INPUT: number
  }

  OPTION_INVESTMENT_OTHER: {
    CHARACTERISTICS: number
    PURPOSE: number
  }
}

const constants: ConstantCommonProps = {
  TEST: 'data test constants',
  ACCESS_TOKEN_KEY: 'access_token',

  REFRESH_TOKEN_KEY: 'refresh_token',

  TOKEN_AGE: 60 * 60 * 24 * 7,

  EMPTY_STRING: '-',

  DATE_TIME_SLASH: 'YYYY/MM/DD',

  DATE_TIME_SECOND_FORMAT: 'YYYY/MM/DD HH:mm:ss',

  DATE_TIME_FORMAT_HYPEN: 'YYYY-MM-DD HH:mm',

  REFRESH_TOKEN_AGE: 60 * 60 * 24 * 30,

  LOCALE: 'ja',

  DATE_TIME_FORMAT: 'YYYY/MM/DD hh:mm',

  DATE_FORMAT: 'YYYY-MM-DD',

  PAGE_SIZES: [50, 100, 200],

  SORT_ORDER: {
    ASC: 'asc',
    DESC: 'desc',
  },

  PROVIDERS: {
    INVESTOR: 'investors',
    CAPITAL_CALLER: 'capital_caller',
    STAFF: 'staff',
  },

  TYPE_REGISTER_INVESTOR: {
    PERSONAL: 1,
    CORPORATE: 2,
  },

  STEP_TYPE: {
    INVESTOR: 'investor',
    CAPITAL_CALLER: 'capitalCaller',
    INQUIRY: 'inquiry',
    PROJECT: 'project',
  },

  INVESTOR_REGISTER_STEP: {
    CONFIRM_AND_AGREEMENT: 1,
    SUITABILITY: 2,
    INPUT_INFORMATION: 3,
    SUBMIT_KYC: 4,
    CONFIRM_INFORMATION: 5,
    COMPLETE: 6,
  },

  CAPITAL_CALLER_REGISTER_STEP: {
    CONFIRM_AND_AGREEMENT: 1,
    INPUT_INFORMATION: 2,
    CONFIRM_INFORMATION: 3,
    COMPLETE: 4,
  },

  INQUIRY_REGISTER_STEP: {
    INPUT_INFORMATION: 1,
    CONFIRM_INFORMATION: 2,
    COMPLETE: 3,
  },

  PROJECT_REGISTER_STEP: {
    CONFIRM_DOCUMENT: 1,
    CONFIRM_INFORMATION: 2,
    COMPLETE: 3,
  },

  CAPITAL_CALLER_REGISTER_IMAGE_UPLOAD: {
    FILE_SIZE_LIMIT: 10,
    FILE_TYPE: 'image/png,image/jpeg',
  },

  CAPITAL_CALLER_PROJECT_FILE_UPLOAD: {
    FILE_SIZE_LIMIT: 5,
    FILE_TYPE: 'application/pdf,image/png,image/jpeg',
  },

  GENDER: {
    MALE: 0,
    FEMALE: 1,
  },

  ACCOUNT_TYPE: {
    USUALLY: 0,
    CURRENT: 1,
    SAVINGS: 2,
  },

  ANSWERS: {
    NO: false,
    YES: true,
  },

  BANK_CODE_DEFAULT: [
    '0001',
    '0005',
    '0009',
    '0010',
    '0017',
    '0033',
    '0036',
    '0038',
    '0397',
  ],

  RANGE_MONTH: 12,
  MASTER_DATA_KEY: [
    'job',
    'pref',
    'sex',
    'source-income',
    'annual-income',
    'financial-asset',
    'investment-sector',
    'investment-type',
    'investment-objective',
    'where-did-you-know',
    'project_status',
    'company-investment-sector',
    'fund-page-category',
    'fund-page-portfolio',
    'fund-page-type',
  ],
  PREF_ID_DEFAULT: 0,
  PROJECT_TYPE_DEFAULT: 0,

  STATUS_CODE: {
    OK: 200,
    PAGE_NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SYSTEM_ERROR: 500,
    BAD_INPUT: 400,
  },

  OPTION_INVESTMENT_OTHER: {
    CHARACTERISTICS: 5,
    PURPOSE: 5,
  },
}

export default constants
