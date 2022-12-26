export interface ConstantCommonProps {
  LOCALE: 'ja'

  SORT_ORDER: {
    ASC: 'asc'
    DESC: 'desc'
  }

  PAGE_DEFAULT: {
    TOTAL: number
    LIMIT: number
    CURRENT_PAGE: number
  }

  BLOG: {
    SORT_BY: string
  }

  IMAGE_UPLOAD: {
    FILE_SIZE_LIMIT: number
    FILE_TYPE: string
  }

  IMAGE_UPLOAD_DEFAULT: string
}

const constants: ConstantCommonProps = {
  PAGE_DEFAULT: {
    TOTAL: 0,
    LIMIT: 9,
    CURRENT_PAGE: 1,
  },

  BLOG: {
    SORT_BY: 'id',
  },

  IMAGE_UPLOAD: {
    FILE_SIZE_LIMIT: 5,
    FILE_TYPE: 'image/jpeg,image/jpg,image/png',
  },

  LOCALE: 'ja',

  SORT_ORDER: {
    ASC: 'asc',
    DESC: 'desc',
  },

  IMAGE_UPLOAD_DEFAULT:
    '"https://cdn.tgdd.vn//GameApp/1321010//Talon0-800x450.jpg',
}

export default constants
