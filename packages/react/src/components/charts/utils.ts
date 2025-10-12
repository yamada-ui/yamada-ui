import type { StyledTheme, System } from "../../core"
import type { Dict } from "../../utils"
import { getCSS } from "../../core"
import { cx, isString, splitObject, toArray } from "../../utils"

export const getClassName =
  (...styles: (Dict | string | undefined)[]) =>
  (system: System, theme: StyledTheme) =>
    cx(
      ...styles.map((style) =>
        isString(style) ? style : getCSS(system, theme)(style),
      ),
    )

export const getComponentProps =
  <T extends Dict, K extends keyof T>(
    system: System,
    [obj, keys]: [T, K[]],
    ...props: (Dict | string | undefined)[]
  ) =>
  <P extends boolean = false>(theme: StyledTheme, isContain?: P) => {
    const [pickedProps, omittedProps] = splitObject<T, K>(obj, keys)
    const className = getClassName(...toArray(props), omittedProps)(
      system,
      theme,
    )

    return (
      !isContain ? [pickedProps, className] : { ...pickedProps, className }
    ) as P extends false
      ? [{ [P in K]?: T[P] }, string]
      : { [P in K]?: T[P] } & { className: string }
  }
