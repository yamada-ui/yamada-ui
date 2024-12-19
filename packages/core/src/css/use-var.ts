import type { Dict } from "@yamada-ui/utils"
import type { StyleConfig } from "../config"
import type { StyleProperty } from "../styles"
import type { StyledTheme } from "../theme.types"
import type { CSSUIObject, CSSUIProps } from "./css.types"
import { ThemeContext } from "@emotion/react"
import { flattenObject, isObject, merge } from "@yamada-ui/utils"
import { useContext, useMemo } from "react"
import { DEFAULT_VAR_PREFIX } from "../constant"
import { styles } from "../styles"

type Format<Y> = (name: Y, index: number) => string
type Variable = Required<CSSUIProps>["vars"][number]

const defaultFormat: Format<any> = (name, index) => `${name}-${index}`

export const useCreateVars = <Y extends Dict, M extends keyof Y = keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
  options?: CreateVarsOptions<M>,
) => {
  const theme = useContext(ThemeContext) as StyledTheme

  return useMemo(
    () => createVars(obj, keys, options)(theme),
    [obj, keys, options, theme],
  )
}

interface CreateVarsOptions<M> {
  format?: Format<M>
  transform?: boolean
}

export const createVars =
  <Y extends Dict, M extends keyof Y = keyof Y>(
    obj: Y,
    keys: M[] | readonly M[],
    { format = defaultFormat, transform = false }: CreateVarsOptions<M> = {},
  ) =>
  (theme: StyledTheme): [Variable[], { [key in M]?: string }] => {
    const map = new Map<M, Variable>()
    const result: { [key in M]?: string } = {}

    if (!theme.__breakpoints) return [[], result]

    const { isResponsive } = theme.__breakpoints
    const prefix = theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

    const flattedObj = flattenObject(obj, {
      separator: "$$",
      shouldProcess: (obj) => !isResponsive(obj),
    })

    Object.entries(flattedObj).forEach(([path, value], index) => {
      const segments = path.split("$$")

      if (!segments.some((path) => keys.includes(path as M))) return

      const name = segments.at(-1) as M
      const rest = segments.slice(0, -1)

      if (map.has(name)) {
        const variable = map.get(name)

        if (!variable) return

        const additionalValue = rest.reduceRight<Dict | string>(
          (acc, key) => ({ [key]: acc }),
          isObject(value) ? value : { base: value },
        ) as Dict

        value = merge(variable.value, additionalValue)

        map.set(name, { ...variable, value })
      } else {
        const formattedName = format(name, index)
        const style: StyleConfig | true | undefined =
          styles[name as StyleProperty]
        const token = isObject(style) ? style.token : undefined

        const additionalValue = rest.reduceRight<Dict | string>(
          (acc, key) => ({ [key]: acc }),
          isObject(value) ? value : { base: value },
        ) as Dict

        value = { base: undefined, ...additionalValue }

        map.set(name, {
          name: formattedName,
          token,
          value,
          __prefix: prefix,
        })

        if (transform) {
          result[name] = `var(--${prefix}-${formattedName})`
        } else {
          result[name] = `$${formattedName}`
        }
      }
    })

    const variables: Variable[] = [...map.values()]

    return [variables, result]
  }

export const mergeVars = (...vars: CSSUIObject["vars"][]): CSSUIProps["vars"] =>
  vars
    .filter(Boolean)
    .flatMap((vars) => vars as Variable[]) as CSSUIProps["vars"]
