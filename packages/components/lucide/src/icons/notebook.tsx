import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Notebook as NotebookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Notebook` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Notebook = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NotebookIcon} {...props} />
))
