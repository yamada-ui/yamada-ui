import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NotebookPen as NotebookPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotebookPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookPen = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NotebookPenIcon} {...props} />
))
