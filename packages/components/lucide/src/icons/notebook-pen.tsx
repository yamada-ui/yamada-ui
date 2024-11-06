import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NotebookPen as LucideNotebookPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotebookPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookPenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNotebookPenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `NotebookPenIcon` instead.
 */
export const NotebookPen = NotebookPenIcon
