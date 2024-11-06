import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Diff as LucideDiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDiffIcon} {...props} />
))

/**
 * @deprecated Use `DiffIcon` instead.
 */
export const Diff = DiffIcon
