import type { FC, HTMLUIProps, ThemeProps } from "../../core"
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

/**
 * @deprecated Use icons from `@yamada-ui/lucide` instead.
 */
export const CloseIcon: FC<IconProps> = (props) => {
  return (
    <Icon aria-hidden focusable="false" viewBox="0 0 24 24" {...props}>
      <path
        d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
        fill="currentColor"
      />
    </Icon>
  )
}

CloseIcon.__ui__ = "CloseIcon"

/**
 * @deprecated Use icons from `@yamada-ui/lucide` instead.
 */
export const ChevronIcon: FC<IconProps> = (props) => {
  return (
    <Icon aria-hidden focusable="false" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        fill="currentColor"
      />
    </Icon>
  )
}

ChevronIcon.__ui__ = "ChevronIcon"
