import type { Dict } from "../../utils"
import type { StyleConfig } from "../config"
import type { StyleProperty } from "../styles"
import type { StyledTheme, UsageTheme } from "../theme"
import type { CSSProps } from "./index.types"
import { useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import {
  flattenObject,
  isArray,
  isObject,
  merge,
  omitObject,
} from "../../utils"
import { styleProps } from "../components"
import { styles } from "../styles"
import { getVar } from "./var"

type Format<Y> = (name: Y, index: number) => string
type Variables = Required<CSSProps>["vars"]
type Variable = Variables[number]

const defaultFormat: Format<any> = (name, index) => `${name}-${index}`

export const useCreateVars = <Y extends Dict, M extends keyof Y = keyof Y>(
  obj: Y,
  keys: M[] | readonly M[],
  options?: CreateVarsOptions<M>,
) => {
  const { theme } = useTheme()

  return useMemo(
    () => createVars(theme)(obj, keys, options),
    [obj, keys, options, theme],
  )
}

interface CreateVarsOptions<M> {
  format?: Format<M>
  transform?: boolean
}

export const createVars =
  (theme: StyledTheme<UsageTheme>) =>
  <Y extends Dict, M extends keyof Y = keyof Y>(
    obj: Y,
    keys: M[] | readonly M[],
    { format = defaultFormat, transform = false }: CreateVarsOptions<M> = {},
  ): [Variable[], { [key in M]?: string }] => {
    const map = new Map<M, Variable>()
    const result: { [key in M]?: string } = {}

    if (!theme.__breakpoints) return [[], result]

    const { isResponsive } = theme.__breakpoints

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
        })

        if (transform) {
          result[name] = getVar(formattedName)(theme)
        } else {
          result[name] = `{${formattedName}}`
        }
      }
    })

    const variables: Variable[] = [...map.values()]

    return [variables, result]
  }

const isValidProps = (prop: string) => /^[@&>]/.test(prop)

interface InsertVarsOptions extends Omit<Variable, "value"> {
  property: string
}

export const insertVars = <Y extends Dict | Dict[] | undefined>(
  props: Y,
  options: InsertVarsOptions[],
): Y => {
  if (!props) return props

  const createCSSObject = (props: Dict) =>
    Object.fromEntries(
      Object.entries(props).flatMap(([prop, value]) => {
        if (!styleProps.has(prop) && !isValidProps(prop)) {
          return [[prop, value]]
        } else if (isObject(value)) {
          return [[prop, insertVars(value, options)]]
        } else {
          const variable = options.find((option) => option.property === prop)

          if (variable) {
            return [
              [prop, value],
              [
                "vars",
                mergeVars(props.vars, [
                  { value, ...omitObject(variable, ["property"]) },
                ]),
              ],
            ]
          } else {
            return [[prop, value]]
          }
        }
      }),
    )

  if (isArray(props)) {
    return props.map(createCSSObject) as Y
  } else {
    return createCSSObject(props) as Y
  }
}

export const mergeVars = (
  ...vars: (undefined | Variable | Variables)[]
): CSSProps["vars"] =>
  vars.filter(Boolean).flatMap((vars) => vars as Variable[]) as CSSProps["vars"]
