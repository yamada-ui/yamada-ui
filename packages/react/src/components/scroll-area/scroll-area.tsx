import type { HTMLUIProps, ThemeProps } from "../../core"
import type { ScrollAreaStyle } from "./scroll-area.style"
import type { UseScrollAreaProps } from "./use-scroll-area"
import { createSlotComponent, ui } from "../../core"
import { scrollAreaStyle } from "./scroll-area.style"
import { useScrollArea } from "./use-scroll-area"

export interface ScrollAreaProps
  extends ThemeProps<ScrollAreaStyle>,
    UseScrollAreaProps {
  /**
   * Props for inner element.
   */
  innerProps?: HTMLUIProps
}

export const {
  PropsContext: ScrollAreaPropsContext,
  usePropsContext: useScrollAreaPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ScrollAreaProps, ScrollAreaStyle>(
  "scroll-area",
  scrollAreaStyle,
)

/**
 * `ScrollArea` is a component that displays a customized scrollbar.
 *
 * @see Docs https://yamada-ui.com/components/data-display/scroll-area
 */
export const ScrollArea = withProvider<"div", ScrollAreaProps>(
  ({ children, innerProps, ...rest }) => {
    const { getRootProps } = useScrollArea(rest)

    const computedChildren = innerProps ? (
      <InternalScrollArea {...innerProps}>{children}</InternalScrollArea>
    ) : (
      children
    )

    return <ui.div {...getRootProps()}>{computedChildren}</ui.div>
  },
  "root",
)()

interface InternalScrollAreaProps extends HTMLUIProps {}

const InternalScrollArea = withContext<"div", InternalScrollAreaProps>(
  "div",
  "inner",
)()
