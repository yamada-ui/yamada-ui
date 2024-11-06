import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Notebook as LucideNotebookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotebookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotebookIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideNotebookIcon} {...props} />
))

/**
 * @deprecated Use `NotebookIcon` instead.
 */
export const Notebook = NotebookIcon
