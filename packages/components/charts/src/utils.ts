import type { StyledTheme } from "@yamada-ui/core"
import { getCSS } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx, isString, splitObject } from "@yamada-ui/utils"

export const getClassName =
  (...styles: (Dict | string)[]) =>
  (theme: StyledTheme) =>
    cx(
      ...styles.map((style) =>
        isString(style) ? style : getCSS(style)(theme),
      ),
    )

export const getProps =
  <T extends Dict, K extends keyof T>(
    [obj, keys]: [T, K[]],
    ...props: (Dict | string)[]
  ) =>
  (theme: StyledTheme) => {
    const [pickedProps, omittedProps] = splitObject<T, K>(obj, keys)
    const className = getClassName(omittedProps, ...props)(theme)

    return [pickedProps, className] as const
  }
