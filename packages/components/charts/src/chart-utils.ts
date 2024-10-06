import type { StyledTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { getCSS } from "@yamada-ui/core"
import { cx, isString, splitObject } from "@yamada-ui/utils"

export const getClassName =
  (...styles: (Dict | string | undefined)[]) =>
  (theme: StyledTheme) =>
    cx(
      ...styles.map((style) =>
        isString(style) ? style : getCSS(style)(theme),
      ),
    )

export const getComponentProps =
  <T extends Dict, K extends keyof T>(
    [obj, keys]: [T, K[]],
    ...props: (Dict | string | undefined)[]
  ) =>
  <P extends boolean = false>(theme: StyledTheme, isContain?: P) => {
    const [pickedProps, omittedProps] = splitObject<T, K>(obj, keys)
    const className = getClassName(...props, omittedProps)(theme)

    return (
      !isContain ? [pickedProps, className] : { ...pickedProps, className }
    ) as P extends false
      ? [{ [P in K]: T[P] }, string]
      : { [P in K]: T[P] } & { className: string }
  }
