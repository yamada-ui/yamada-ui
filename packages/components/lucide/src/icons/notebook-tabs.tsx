import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NotebookTabs as LucideNotebookTabsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotebookTabsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookTabsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNotebookTabsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `NotebookTabsIcon` instead.
 */
export const NotebookTabs = NotebookTabsIcon
