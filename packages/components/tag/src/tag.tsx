import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
} from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx } from "@yamada-ui/utils"
import {
  FC,
  HTMLAttributes,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useRef,
} from "react"

type TagnOptions = {
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
  onCloseClick?: MouseEventHandler<HTMLElement>
  /**
   * If `true`, the tag is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
}

export type TagProps = HTMLUIProps<"span"> & ThemeProps<"Tag"> & TagnOptions

export const Tag = forwardRef<TagProps, "span">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Tag", props)
  const {
    className,
    leftIcon,
    rightIcon,
    onCloseClick,
    isDisabled,
    children,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    maxW: "100%",
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
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
      <TagLabel>{children}</TagLabel>
      {rightIcon}
      {onCloseClick ? (
        <CloseButton isDisabled={isDisabled} onClick={onCloseClick}>
          <CloseIcon />
        </CloseButton>
      ) : null}
    </ui.span>
  )
})

const TagLabel: FC<{ children: ReactNode }> = ({ children, ...props }) => {
  const [styles] = useMultiComponentStyle("Tag", props)
  const css = styles.label

  return (
    <ui.span noOfLines={1} __css={css}>
      {children}
    </ui.span>
  )
}

const CloseIcon: FC = () => {
  return (
    <Icon verticalAlign="inherit" viewBox="0 0 512 512" fontSize="lg">
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
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "0",
    ...styles.closeButton,
  }

  const rest = useClickable({ ref, ...(props as HTMLAttributes<HTMLElement>) })

  return (
    <ui.span aria-label="close" __css={css} {...rest}>
      {children}
    </ui.span>
  )
}
