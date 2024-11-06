import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IterationCcw as LucideIterationCcwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IterationCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IterationCcwIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideIterationCcwIcon} {...props} />
  ),
)

/**
 * @deprecated Use `IterationCcwIcon` instead.
 */
export const IterationCcw = IterationCcwIcon
