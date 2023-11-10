import { useColorMode, useTheme, Theme } from "@yamada-ui/core"
import {
  getMemoizedObject as get,
  isArray,
  isUndefined,
} from "@yamada-ui/utils"

export const useToken = <
  Y extends string | number = string,
  M extends keyof Omit<Theme, "components" | "colorSchemes"> = keyof Omit<
    Theme,
    "components" | "colorSchemes"
  >,
>(
  name: M,
  path: Theme[M] | number | undefined,
) => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  if (name === "layerStyles") name = "styles.layerStyles" as M

  if (name === "textStyles") name = "styles.textStyles" as M

  if (name === "transitionProperty") name = "transitions.property" as M

  if (name === "transitionDuration") name = "transitions.duration" as M

  if (name === "transitionEasing") name = "transitions.easing" as M

  let value = get<Y | [Y, Y] | undefined>(theme, `${name}.${path}`)

  if (!isUndefined(value)) {
    if (isArray(value)) {
      const [lightValue, darkValue] = value

      return colorMode === "light" ? lightValue : darkValue
    } else {
      return value
    }
  } else {
    value = get<Y | [Y, Y] | undefined>(theme, `semantics.${name}.${path}`)

    if (isArray(value)) {
      value = [
        get<Y>(theme, `${name}.${value[0]}`) ?? value[0],
        get<Y>(theme, `${name}.${value[1]}`) ?? value[1],
      ]
    } else {
      value = get<Y | undefined>(theme, `${name}.${value}`) ?? value
    }

    if (isArray(value)) {
      const [lightValue, darkValue] = value

      value = colorMode === "light" ? lightValue : darkValue

      if (isArray(value)) {
        const [lightValue, darkValue] = value as unknown as [Y, Y]

        return colorMode === "light" ? lightValue : darkValue
      } else {
        return value
      }
    } else {
      return value
    }
  }
}
