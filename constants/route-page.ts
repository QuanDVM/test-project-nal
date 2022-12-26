export interface ConstantRoutePageProps {
  HOME: string
  CSWEB062_CLWeb010: string
  CSWEB011_CLWeb001: string
  HELP: string
  CSWEB031: string
  CSWEB032: string
  CSWEB033: string
  CSWEB035: string
  CSWEB036: string
  CSWEB064: string
  CSWEB012: string
  CSWEB063_01: string
  CSWEB063_02: string
  CSWEB013: string
  CSWEB014: string
  CSWEB015: string
  CSWEB016: string
  CSWEB006: string
  CSWEB008: string
  CSWEB009: string
  CSWEB061: string
  CSWEB026: string
  CSWEB027: string
  CSWEB074: string

  CLWEB003: string
  CLWEB017: string
  CLWEB018: string
  CLWEB019: string
  CLWEB020: string
  CLWEB002_01: string
  CLWEB002_02: string
}

const routePage: ConstantRoutePageProps = {
  HOME: '/',
  CSWEB062_CLWeb010: '/login',
  CSWEB011_CLWeb001: '/register',
  HELP: '/help',

  // CS WEB
  CSWEB064: '/investor/register/process-flow',
  CSWEB012: '/investor/register/confirm',
  CSWEB063_01: '/forgot-password',
  CSWEB063_02: '/reset-password',
  CSWEB013: '/investor/register/suitability',
  CSWEB014: '/investor/register/input-info',
  CSWEB015: '/investor/register/submit-kyc',
  CSWEB016: '/investor/register/input-info/confirm',
  CSWEB061: '/investor/register/complete',
  CSWEB006: '/projects/register/confirm-document',
  CSWEB008: '/projects/register/confirm-info',
  CSWEB009: '/projects/register/complete',
  CSWEB031: '/inquiry/register/input-info',
  CSWEB032: '/inquiry/register/confirm',
  CSWEB033: '/inquiry/register/complete',
  CSWEB035: '/investor/policy/utilization-protocol',
  CSWEB036: '/capital-caller/policy/terms-of-use',
  CSWEB026: '/notifications',
  CSWEB027: '/notifications/{id}',
  CSWEB074: '/notifications/setting',

  // CL WEB
  CLWEB003: '/capital-caller/business/update-info',
  CLWEB017: '/capital-caller/register/confirm-agreement',
  CLWEB018: '/capital-caller/register/input-info',
  CLWEB019: '/capital-caller/register/input-info/confirm',
  CLWEB020: '/capital-caller/register/complete',
  CLWEB002_01: '/capital-caller/project/registration-flow',
  CLWEB002_02: '/capital-caller/project/input-info',
}

export default routePage
