import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NotebookTabs as NotebookTabsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotebookTabs` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookTabs = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NotebookTabsIcon} {...props} />
))
