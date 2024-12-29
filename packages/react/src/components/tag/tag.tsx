import type { MouseEventHandler, ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { TagStyle } from "./tag.style"
import { useMemo, useRef } from "react"
import { createSlotComponent, ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import {
  dataAttr,
  findChild,
  getValidChildren,
  isEmpty,
  omitChildren,
} from "../../utils"
import { XIcon } from "../icon"
import { tagStyle } from "./tag.style"

export interface TagContext
  extends Pick<TagRootProps, "disabled" | "endIcon" | "startIcon"> {}

export interface TagRootProps
  extends HTMLUIProps<"span">,
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
} = createSlotComponent<TagRootProps, TagStyle, TagContext>("tag", tagStyle)

/**
 * `Tag` is a component used to categorize or organize items using keywords that describe them.
 *
 * @see Docs https://yamada-ui.com/components/data-display/tag
 */
export const TagRoot = withProvider<"span", TagRootProps>(
  ({
    children,
    disabled,
    endIcon,
    startIcon,
    closeButtonProps,
    onClose,
    ...rest
  }) => {
    const validChildren = getValidChildren(children)

    const customTagLabel = findChild(validChildren, TagLabel)
    const customTagStartElement = findChild(validChildren, TagStartElement)
    const customTagEndElement = findChild(validChildren, TagEndElement)
    const customTagCloseButton = findChild(validChildren, TagCloseButton)

    const cloneChildren = !isEmpty(validChildren)
      ? omitChildren(
          validChildren,
          TagLabel,
          TagStartElement,
          TagEndElement,
          TagCloseButton,
        )
      : children

    const context = useMemo(
      () => ({
        disabled,
        endIcon,
        startIcon,
      }),
      [disabled, endIcon, startIcon],
    )

    return (
      <TagContext value={context}>
        <ui.span data-disabled={dataAttr(disabled)} {...rest}>
          {customTagStartElement ?? <TagStartElement />}

          {customTagLabel ?? <TagLabel>{cloneChildren}</TagLabel>}

          {customTagEndElement ?? <TagEndElement />}

          {customTagCloseButton ??
            (onClose ? (
              <TagCloseButton
                disabled={disabled}
                onClick={onClose}
                {...closeButtonProps}
              />
            ) : null)}
        </ui.span>
      </TagContext>
    )
  },
  "root",
)()

export interface TagLabelProps extends HTMLUIProps<"span"> {}

export const TagLabel = withContext<"span", TagLabelProps>("span", "label")(
  undefined,
  (props) => {
    const { disabled } = useTagContext()

    return { "data-disabled": dataAttr(disabled), ...props }
  },
)

export interface TagStartElementProps extends HTMLUIProps<"span"> {}

export const TagStartElement = withContext<"span", TagStartElementProps>(
  ({ children, ...rest }) => {
    const { disabled, startIcon } = useTagContext()

    children ||= startIcon

    if (!children) return null

    return (
      <ui.span data-disabled={dataAttr(disabled)} {...rest}>
        {children}
      </ui.span>
    )
  },
  ["element", "startElement"],
)()

export interface TagEndElementProps extends HTMLUIProps<"span"> {}

export const TagEndElement = withContext<"span", TagEndElementProps>(
  ({ children, ...rest }) => {
    const { disabled, endIcon } = useTagContext()

    children ||= endIcon

    if (!children) return null

    return (
      <ui.span data-disabled={dataAttr(disabled)} {...rest}>
        {children}
      </ui.span>
    )
  },
  ["element", "endElement"],
)()

export interface TagCloseButtonProps extends HTMLUIProps<"span"> {
  disabled?: boolean
}

export const TagCloseButton = withContext<"span", TagCloseButtonProps>("span", [
  "element",
  "closeButton",
])(undefined, ({ children, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const rest = useClickable<HTMLSpanElement>({ ref, ...props })

  return { "aria-label": "Close tag", children: children || <XIcon />, ...rest }
})
