import type { MouseEventHandler, ReactElement } from "react"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import { useRef } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { ariaAttr, cx, dataAttr } from "../../utils"
import { Icon } from "../icon"

interface TagOptions {
  /**
   * If `true`, the tag is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Icon to be displayed to the end of the tag.
   */
  endIcon?: ReactElement
  /**
   * If `true`, the tag is disabled.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * Icon to be displayed to the left of the tag.
   *
   * @deprecated Use `startIcon` instead.
   */
  leftIcon?: ReactElement
  /**
   * Icon to be displayed to the right of the tag.
   *
   * @deprecated Use `endIcon` instead.
   */
  rightIcon?: ReactElement
  /**
   * Icon to be displayed to the start of the tag.
   */
  startIcon?: ReactElement
  /**
   * Props for tag close button element.
   */
  closeButtonProps?: TagCloseButtonProps
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
export const Tag: FC<TagProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("Tag", props)
  const {
    className,
    children,
    isDisabled,
    disabled = isDisabled,
    rightIcon,
    endIcon = rightIcon,
    leftIcon,
    startIcon = leftIcon,
    closeButtonProps,
    onClose,
    ...rest
  } = omitThemeProps(mergedProps)

  return (
    <ui.span
      className={cx("ui-tag", className)}
      aria-disabled={ariaAttr(disabled)}
      data-disabled={dataAttr(disabled)}
      __css={styles.container}
      {...rest}
    >
      {startIcon}

      <ui.span lineClamp={1} __css={styles.label}>
        {children}
      </ui.span>

      {endIcon}

      {onClose ? (
        <TagCloseButton
          disabled={disabled}
          onClick={onClose}
          {...closeButtonProps}
        >
          <TagCloseIcon />
        </TagCloseButton>
      ) : null}
    </ui.span>
  )
}

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
  disabled?: boolean
}

const TagCloseButton: FC<TagCloseButtonProps> = ({ children, ...props }) => {
  const [styles] = useComponentMultiStyle("Tag", props)
  const ref = useRef<HTMLSpanElement>(null)

  const rest = useClickable<HTMLSpanElement>({ ref, ...props })

  return (
    <ui.span aria-label="Close tag" __css={styles.closeButton} {...rest}>
      {children}
    </ui.span>
  )
}

TagCloseButton.displayName = "TagCloseButton"
TagCloseButton.__ui__ = "TagCloseButton"
