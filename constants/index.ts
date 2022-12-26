import common, { ConstantCommonProps } from './common'
import routePage from './route-page'
import routeApi from './route-api'
import routeStatic from './route-static'

export interface ConstantsProps {
  common: ConstantCommonProps
  routePage: typeof routePage
  routeApi: typeof routeApi
  routeStatic: typeof routeStatic
}

const constants: ConstantsProps = {
  common,
  routePage,
  routeApi,
  routeStatic,
}

export default constants
