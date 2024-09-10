import type { ColorMode, StyledTheme, Theme } from "@yamada-ui/core"
import { useColorMode, useTheme } from "@yamada-ui/core"
import {
  getMemoizedObject as get,
  isArray,
  isUndefined,
} from "@yamada-ui/utils"
import { useMemo } from "react"

/**
 * `useToken` is a custom hook for retrieving tokens from the theme.
 *
 * @see Docs https://yamada-ui.com/hooks/use-token
 */
export const useToken = <
  Y extends string | number = string,
  M extends keyof Omit<
    Theme,
    "components" | "colorSchemes" | "themeSchemes"
  > = keyof Omit<Theme, "components" | "colorSchemes" | "themeSchemes">,
>(
  name: M,
  path: Theme[M] | number | undefined,
) => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  return useMemo(
    () => getToken<Y, M>(name, path)(theme, colorMode),
    [name, path, theme, colorMode],
  )
}

export const getToken =
  <
    Y extends string | number = string,
    M extends keyof Omit<
      Theme,
      "components" | "colorSchemes" | "themeSchemes"
    > = keyof Omit<Theme, "components" | "colorSchemes" | "themeSchemes">,
  >(
    name: M,
    path: Theme[M] | number | undefined,
  ) =>
  (theme: StyledTheme, colorMode: ColorMode) => {
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
