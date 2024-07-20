import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx } from "@yamada-ui/utils"
import type { FC, HTMLAttributes, MouseEventHandler, ReactElement } from "react"
import { useRef } from "react"

type TagOptions = {
  /**
   * Icon to be displayed to the start of the tag.
   */
  startIcon?: ReactElement
  /**
   * Icon to be displayed to the end of the tag.
   */
  endIcon?: ReactElement
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

export type TagProps = HTMLUIProps<"span"> & ThemeProps<"Tag"> & TagOptions

/**
 * `Tag` is a component used to categorize or organize items using keywords that describe them.
 *
 * @see Docs https://yamada-ui.com/components/data-display/tag
 */
export const Tag = forwardRef<TagProps, "span">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Tag", props)
  const {
    className,
    startIcon,
    endIcon,
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
      {startIcon}

      <ui.span lineClamp={1} __css={styles.label}>
        {children}
      </ui.span>

      {endIcon}

      {onClose ? (
        <CloseButton isDisabled={isDisabled} onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      ) : null}
    </ui.span>
  )
})

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

type CloseButtonProps = HTMLUIProps<"span"> & { isDisabled?: boolean }

const CloseButton: FC<CloseButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)

  const [styles] = useMultiComponentStyle("Tag", props)

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
