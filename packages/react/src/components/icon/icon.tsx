import type { HTMLUIProps, ThemeProps } from "../../core"
import type { IconStyle } from "./icon.style"
import { createComponent, insertVars } from "../../core"
import { iconStyle } from "./icon.style"

export interface IconProps extends HTMLUIProps<"svg">, ThemeProps<IconStyle> {}

export const {
  component,
  PropsContext: IconPropsContext,
  usePropsContext: useIconPropsContext,
  withContext,
} = createComponent<IconProps, IconStyle>("icon", iconStyle)

/**
 * `Icon` is a general icon component that can be used in your projects.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/icon
 */
export const Icon = withContext("svg")(
  {
    "aria-hidden": true,
    role: "img",
    verticalAlign: "middle",
  },
  ({ css, ...rest }) => {
    css = insertVars(css, [
      {
        name: "boxSize",
        property: "fontSize",
        token: "fontSizes",
      },
    ])

    rest = insertVars(rest, [
      {
        name: "boxSize",
        property: "fontSize",
        token: "fontSizes",
      },
    ])

    return {
      css,
      boxSize: "$boxSize",
      ...rest,
    }
  },
)
