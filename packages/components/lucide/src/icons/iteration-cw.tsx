import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IterationCw as IterationCwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IterationCw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IterationCw = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={IterationCwIcon} {...props} />
))
