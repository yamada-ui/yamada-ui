import { isObject, isArray } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import { DEFAULT_VAR_PREFIX } from "../constant"
import type { StyledTheme } from "../theme.types"
import { tokenToVar } from "./utils"

export const vars = (values: any[], theme: StyledTheme) => {
  if (!isArray(values)) return values

  return values.reduce<Dict>((prev, { __prefix, name, token, value }) => {
    const prefix = __prefix ?? theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

    name = `--${prefix}-${name}`

    if (isObject(value)) {
      value = Object.entries(value).reduce<Dict>((prev, [key, value]) => {
        prev[key] = !!token ? tokenToVar(token, value)(theme) : value

        return prev
      }, {})
    } else if (isArray(value)) {
      value = value.map((value) =>
        !!token ? tokenToVar(token, value)(theme) : value,
      )
    } else {
      value = !!token ? tokenToVar(token, value)(theme) : value
    }

    prev[name] = value

    return prev
  }, {})
}
