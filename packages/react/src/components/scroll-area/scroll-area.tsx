import type { ThemeProps } from "../../core"
import type { ScrollAreaStyle } from "./scroll-area.style"
import type { UseScrollAreaProps } from "./use-scroll-area"
import { createComponent, ui } from "../../core"
import { scrollAreaStyle } from "./scroll-area.style"
import { useScrollArea } from "./use-scroll-area"

export interface ScrollAreaProps
  extends ThemeProps<ScrollAreaStyle>,
    UseScrollAreaProps {}

export const {
  PropsContext: ScrollAreaPropsContext,
  usePropsContext: useScrollAreaPropsContext,
  withContext,
} = createComponent<ScrollAreaProps, ScrollAreaStyle>(
  "scroll-area",
  scrollAreaStyle,
)

/**
 * `ScrollArea` is a component that displays a customized scrollbar.
 *
 * @see Docs https://yamada-ui.com/components/scroll-area
 */
export const ScrollArea = withContext(({ children, ...rest }) => {
  const { getRootProps } = useScrollArea(rest)

  return <ui.div {...getRootProps()}>{children}</ui.div>
})()
