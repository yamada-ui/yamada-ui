import type { HTMLUIProps, ThemeProps, CSSUIObject, FC } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx } from "@yamada-ui/utils"
import type { HTMLAttributes, MouseEventHandler, ReactElement } from "react"
import { useRef } from "react"

interface TagOptions {
  /**
   * Icon to be displayed to the start of the tag.
   */
  startIcon?: ReactElement
  /**
   * Icon to be displayed to the left of the tag.
   * If specified at the same time as `startIcon`, `startIcon` takes precedence.
   *
   * @deprecated Use `startIcon` instead.
   */
  leftIcon?: ReactElement
  /**
   * Icon to be displayed to the end of the tag.
   */
  endIcon?: ReactElement
  /**
   * Icon to be displayed to the right of the tag.
   * If specified at the same time as `endIcon`, `endIcon` takes precedence.
   *
   * @deprecated Use `endIcon` instead.
   */
  rightIcon?: ReactElement
  /**
   * Function to be executed when the close button is clicked.
   */
  onClose?: MouseEventHandler<HTMLElement>
  /**
   * If `true`, the tag is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
}

export interface TagProps
  extends HTMLUIProps<"span">,
    ThemeProps<"Tag">,
    TagOptions {}

/**
 * `Tag` is a component used to categorize or organize items using keywords that describe them.
 *
 * @see Docs https://yamada-ui.com/components/data-display/tag
 */
export const Tag = forwardRef<TagProps, "span">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Tag", props)
  const {
    className,
    startIcon,
    leftIcon,
    endIcon,
    rightIcon,
    onClose,
    isDisabled,
    children,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles.container,
  }

  return (
    <ui.span
      ref={ref}
      className={cx("ui-tag", className)}
      __css={css}
      {...rest}
    >
      {startIcon ?? leftIcon}

      <ui.span lineClamp={1} __css={styles.label}>
        {children}
      </ui.span>

      {endIcon ?? rightIcon}

      {onClose ? (
        <CloseButton isDisabled={isDisabled} onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      ) : null}
    </ui.span>
  )
})

Tag.displayName = "Tag"
Tag.__ui__ = "Tag"

const CloseIcon: FC = () => {
  return (
    <Icon verticalAlign="inherit" viewBox="0 0 512 512" fontSize="1.125rem">
      <path
        fill="currentColor"
        d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
      />
    </Icon>
  )
}

CloseIcon.displayName = "CloseIcon"
CloseIcon.__ui__ = "CloseIcon"

type CloseButtonProps = HTMLUIProps<"span"> & { isDisabled?: boolean }

const CloseButton: FC<CloseButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)

  const [styles] = useComponentMultiStyle("Tag", props)

  const css: CSSUIObject = {
    ...styles.closeButton,
  }

  const rest = useClickable({ ref, ...(props as HTMLAttributes<HTMLElement>) })

  return (
    <ui.span aria-label="Close tag" __css={css} {...rest}>
      {children}
    </ui.span>
  )
}

CloseButton.displayName = "CloseButton"
CloseButton.__ui__ = "CloseButton"
