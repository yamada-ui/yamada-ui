import htmlToImagePackageJson from "html-to-image/package.json"
import yamadaUIPackageJson from "../../../../../packages/react/package.json"

const { dependencies } = yamadaUIPackageJson

export const YAMADA_UI_VERSION = yamadaUIPackageJson.version
export const REACT_VERSION = dependencies.react
export const HTML_TO_IMAGE_VERSION = htmlToImagePackageJson.version
export const FAKER_VERSION =
  yamadaUIPackageJson.devDependencies["@faker-js/faker"]
export const LUCIDE_LAB_VERSION =
  yamadaUIPackageJson.devDependencies["@lucide/lab"]
export const DAYJS_VERSION = yamadaUIPackageJson.dependencies.dayjs
export const MOTION_VERSION = yamadaUIPackageJson.dependencies.motion
export const REACT_HOOK_FORM_VERSION =
  yamadaUIPackageJson.devDependencies["react-hook-form"]
