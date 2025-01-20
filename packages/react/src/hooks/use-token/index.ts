import type {
  ColorMode,
  StyledTheme,
  ThemeTokens,
  UsageTheme,
} from "../../core"
import { useMemo } from "react"
import { useColorMode } from "../../providers/color-mode-provider"
import { useTheme } from "../../providers/theme-provider"
import { getMemoizedObject as get, isArray, isUndefined } from "../../utils"

type OmittedTheme = Omit<ThemeTokens, "colorSchemes" | "themeSchemes">

/**
 * `useToken` is a custom hook for retrieving tokens from the theme.
 *
 * @see Docs https://yamada-ui.com/hooks/use-token
 */
export const useToken = <
  Y extends number | string = string,
  M extends keyof OmittedTheme = keyof OmittedTheme,
>(
  name: M,
  path: number | ThemeTokens[M] | undefined,
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
    Y extends number | string = string,
    M extends keyof OmittedTheme = keyof OmittedTheme,
  >(
    name: M,
    path: number | ThemeTokens[M] | undefined,
  ) =>
  (theme: StyledTheme<UsageTheme>, colorMode: ColorMode) => {
    if (name === "layerStyles") name = "styles.layerStyles" as M
    if (name === "textStyles") name = "styles.textStyles" as M

    let value = get<[Y, Y] | undefined | Y>(theme, `${name}.${path}`)

    if (!isUndefined(value)) {
      if (isArray(value)) {
        const [lightValue, darkValue] = value

        return colorMode === "light" ? lightValue : darkValue
      } else {
        return value
      }
    } else {
      value = get<[Y, Y] | undefined | Y>(theme, `semantics.${name}.${path}`)

      if (isArray(value)) {
        value = [
          get<Y>(theme, `${name}.${value[0]}`, value[0]),
          get<Y>(theme, `${name}.${value[1]}`, value[1]),
        ]
      } else {
        value = get<undefined | Y>(theme, `${name}.${value}`) ?? value
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
