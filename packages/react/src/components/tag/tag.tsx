import type { MouseEventHandler, ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { TagStyle } from "./tag.style"
import { useMemo, useRef } from "react"
import { createSlotComponent, styled } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { useI18n } from "../../providers/i18n-provider"
import { dataAttr } from "../../utils"
import { XIcon } from "../icon"
import { tagStyle } from "./tag.style"

export interface TagContext extends Pick<TagProps, "disabled"> {}

export interface TagProps
  extends HTMLStyledProps<"span">,
    ThemeProps<TagStyle> {
  /**
   * If `true`, the tag is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Icon to be displayed to the end of the tag.
   */
  endIcon?: ReactNode
  /**
   * Icon to be displayed to the start of the tag.
   */
  startIcon?: ReactNode
  /**
   * Props for tag close button element.
   */
  closeButtonProps?: TagCloseButtonProps
  /**
   * Props for content element.
   */
  contentProps?: TagContentProps
  /**
   * Props for icon element.
   */
  iconProps?: HTMLStyledProps<"span">
  /**
   * Function to be executed when the close button is clicked.
   */
  onClose?: MouseEventHandler<HTMLElement>
}

export const {
  ComponentContext: TagContext,
  PropsContext: TagPropsContext,
  useComponentContext: useTagContext,
  usePropsContext: useTagPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TagProps, TagStyle, TagContext>("tag", tagStyle)

/**
 * `Tag` is a component used to categorize or organize items using keywords that describe them.
 *
 * @see https://yamada-ui.com/components/tag
 */
export const Tag = withProvider(
  ({
    children,
    disabled,
    endIcon,
    startIcon,
    closeButtonProps,
    contentProps,
    iconProps,
    onClose,
    ...rest
  }) => {
    const context = useMemo(() => ({ disabled }), [disabled])

    return (
      <TagContext value={context}>
        <styled.span data-disabled={dataAttr(disabled)} {...rest}>
          {startIcon ? (
            <TagStartIcon {...iconProps}>{startIcon}</TagStartIcon>
          ) : null}

          {children ? (
            <TagContent {...contentProps}>{children}</TagContent>
          ) : null}

          {endIcon ? <TagEndIcon {...iconProps}>{endIcon}</TagEndIcon> : null}

          {onClose ? (
            <TagCloseButton onClick={onClose} {...closeButtonProps} />
          ) : null}
        </styled.span>
      </TagContext>
    )
  },
  "root",
  { transferProps: ["disabled"] },
)()

interface TagContentProps extends HTMLStyledProps<"span"> {}

const TagContent = withContext<"span", TagContentProps>("span", "content")(
  undefined,
  (props) => {
    const { disabled } = useTagContext()

    return { "data-disabled": dataAttr(disabled), ...props }
  },
)

interface TagStartIconProps extends HTMLStyledProps<"span"> {}

const TagStartIcon = withContext<"span", TagStartIconProps>("span", [
  "icon",
  "startIcon",
])(undefined, (props) => {
  const { disabled } = useTagContext()

  return { "data-disabled": dataAttr(disabled), ...props }
})

interface TagEndIconProps extends HTMLStyledProps<"span"> {}

const TagEndIcon = withContext<"span", TagEndIconProps>("span", [
  "icon",
  "endIcon",
])(undefined, (props) => {
  const { disabled } = useTagContext()

  return { "data-disabled": dataAttr(disabled), ...props }
})

interface TagCloseButtonProps extends HTMLStyledProps<"span"> {}

const TagCloseButton = withContext<"span", TagCloseButtonProps>("span", [
  "icon",
  "closeButton",
])(undefined, ({ children, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const { disabled } = useTagContext()
  const rest = useClickable<HTMLSpanElement>({ ref, disabled, ...props })
  const { t } = useI18n("tag")

  return {
    "aria-label": t("Close tag"),
    "data-disabled": dataAttr(disabled),
    children: children || <XIcon />,
    ...rest,
  }
})
