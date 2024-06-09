import { forwardRef } from "@yamada-ui/core"
import { NotebookPen as NotebookPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NotebookPenProps = LucideIconProps

/**
 * `NotebookPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookPen = forwardRef<NotebookPenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NotebookPenIcon} {...props} />
))
