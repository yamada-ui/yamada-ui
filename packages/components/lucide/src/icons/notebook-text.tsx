import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NotebookText as LucideNotebookTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotebookTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookTextIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNotebookTextIcon} {...props} />
  ),
)

/**
 * @deprecated Use `NotebookTextIcon` instead.
 */
export const NotebookText = NotebookTextIcon
