import { forwardRef } from "@yamada-ui/core"
import { RotateCcw as RotateCcwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RotateCcwProps = LucideIconProps

/**
 * `RotateCcw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcw = forwardRef<RotateCcwProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RotateCcwIcon} {...props} />
))
