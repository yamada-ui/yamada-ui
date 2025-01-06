import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  mergeVars,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

interface IconOptions {
  /**
   * The CSS `font-size` property.
   *
   * @deprecated Use `fontSize` instead.
   */
  size?: CSSUIProps["fontSize"]
}

export interface IconProps
  extends HTMLUIProps<"svg">,
    Omit<ThemeProps<"Icon">, "size">,
    IconOptions {}

/**
 * `Icon` is a general icon component that can be used in your projects.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/icon
 */
export const Icon = forwardRef<IconProps, "svg">((props, ref) => {
  const [styles, { size, ...mergedProps }] = useComponentStyle("Icon", props)
  const {
    as: element,
    className,
    fontSize = size,
    viewBox,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
    ...__css,
    vars: mergeVars(styles.vars, __css?.vars),
  }

  if (fontSize) {
    css.vars = mergeVars(css.vars, [
      { name: "boxSize", token: "fontSizes", value: fontSize },
    ])
    css.boxSize = "$boxSize"
  }

  if (element && typeof element !== "string")
    return (
      <ui.svg
        as={element}
        className={cx("ui-icon", className)}
        aria-hidden
        role="img"
        __css={css}
        {...rest}
      />
    )

  return (
    <ui.svg
      ref={ref}
      className={cx("ui-icon", className)}
      aria-hidden
      role="img"
      verticalAlign="middle"
      viewBox={viewBox}
      __css={css}
      {...rest}
    />
  )
})

Icon.displayName = "Icon"
Icon.__ui__ = "Icon"

/**
 * @deprecated Use icons from `@yamada-ui/lucide` instead.
 */
export const CheckIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </Icon>
  )
}

CheckIcon.displayName = "CheckIcon"
CheckIcon.__ui__ = "CheckIcon"

/**
 * @deprecated Use icons from `@yamada-ui/lucide` instead.
 */
export const InfoIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Icon>
  )
}

InfoIcon.displayName = "InfoIcon"
InfoIcon.__ui__ = "InfoIcon"

/**
 * @deprecated Use icons from `@yamada-ui/lucide` instead.
 */
export const WarningIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </Icon>
  )
}

WarningIcon.displayName = "WarningIcon"
WarningIcon.__ui__ = "WarningIcon"

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

CloseIcon.displayName = "CloseIcon"
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

ChevronIcon.displayName = "ChevronIcon"
ChevronIcon.__ui__ = "ChevronIcon"
