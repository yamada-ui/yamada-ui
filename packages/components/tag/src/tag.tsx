import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { HTMLAttributes, MouseEventHandler, ReactElement } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx } from "@yamada-ui/utils"
import { useRef } from "react"

interface TagOptions {
  /**
   * If `true`, the tag is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * Icon to be displayed to the left of the tag.
   */
  leftIcon?: ReactElement
  /**
   * Icon to be displayed to the right of the tag.
   */
  rightIcon?: ReactElement
  /**
   * Function to be executed when the close button is clicked.
   */
  onClose?: MouseEventHandler<HTMLElement>
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
    children,
    isDisabled,
    leftIcon,
    rightIcon,
    onClose,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    alignItems: "center",
    display: "inline-flex",
    gap: "fallback(1, 0.25rem)",
    maxW: "100%",
    verticalAlign: "top",
    ...styles.container,
  }

  return (
    <ui.span
      ref={ref}
      className={cx("ui-tag", className)}
      __css={css}
      {...rest}
    >
      {leftIcon}

      <ui.span lineClamp={1} __css={styles.label}>
        {children}
      </ui.span>

      {rightIcon}

      {onClose ? (
        <TagCloseButton isDisabled={isDisabled} onClick={onClose}>
          <TagCloseIcon />
        </TagCloseButton>
      ) : null}
    </ui.span>
  )
})

Tag.displayName = "Tag"
Tag.__ui__ = "Tag"

const TagCloseIcon: FC = () => {
  return (
    <Icon fontSize="1.125rem" verticalAlign="inherit" viewBox="0 0 512 512">
      <path
        d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
        fill="currentColor"
      />
    </Icon>
  )
}

TagCloseIcon.displayName = "TagCloseIcon"
TagCloseIcon.__ui__ = "TagCloseIcon"

interface TagCloseButtonProps extends HTMLUIProps<"span"> {
  isDisabled?: boolean
}

const TagCloseButton: FC<TagCloseButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)

  const [styles] = useComponentMultiStyle("Tag", props)

  const css: CSSUIObject = {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    outline: "0",
    ...styles.closeButton,
  }

  const rest = useClickable({ ref, ...(props as HTMLAttributes<HTMLElement>) })

  return (
    <ui.span aria-label="Close tag" __css={css} {...rest}>
      {children}
    </ui.span>
  )
}

TagCloseButton.displayName = "TagCloseButton"
TagCloseButton.__ui__ = "TagCloseButton"
