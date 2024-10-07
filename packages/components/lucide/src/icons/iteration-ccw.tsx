import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IterationCcw as IterationCcwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IterationCcw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IterationCcw = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={IterationCcwIcon} {...props} />
))
