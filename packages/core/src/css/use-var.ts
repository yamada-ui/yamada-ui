import { ThemeContext } from "@emotion/react"
import type { Dict } from "@yamada-ui/utils"
import { flattenObject, isObject, merge } from "@yamada-ui/utils"
import { useContext, useMemo } from "react"
import type { StyleConfig } from "../config"
import { styles, type StyleProperty } from "../styles"
import type { StyledTheme } from "../theme.types"
import type { CSSUIProps } from "./css.types"

type Format = (name: string, index: number) => string
type Variables = Required<CSSUIProps>["vars"]

const defaultFormat: Format = (name, index) => `${name}-${index}`

export const useCreateVars = <Y extends Dict, M extends keyof Y = keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
  format: Format = defaultFormat,
) => {
  const theme = useContext(ThemeContext) as StyledTheme

  return useMemo(
    () => createVars(obj, keys, format)(theme),
    [obj, keys, format, theme],
  )
}

export const createVars =
  <Y extends Dict, M extends keyof Y = keyof Y>(
    obj: Y,
    keys: M[] | readonly M[],
    format: Format = defaultFormat,
  ) =>
  (theme: StyledTheme): [Variables, Dict] => {
    const variables: Variables = []
    let cssObj: Dict = {}

    if (!theme.__breakpoints) return [variables, cssObj]

    const { isResponsive } = theme.__breakpoints
    const flattedObj = flattenObject(obj, {
      separator: "$$",
      shouldProcess: (obj) => !isResponsive(obj),
    })

    Object.entries(flattedObj).forEach(([_paths, value], index) => {
      const paths = _paths.split("$$")

      if (!paths.some((path) => keys.includes(path as M))) return

      const name = paths.at(-1) as StyleProperty
      const formattedName = format(name, index)

      const style: StyleConfig | true | undefined = styles[name]

      const token = isObject(style) ? style.token : undefined

      variables.push({ name: formattedName, token, value })

      const restoreObj = paths.reduceRight<string | Dict>(
        (acc, key) => ({ [key]: acc }),
        `$${formattedName}`,
      ) as Dict

      cssObj = merge(cssObj, restoreObj)
    })

    return [variables, cssObj]
  }
