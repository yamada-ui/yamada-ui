import { forwardRef } from "@yamada-ui/core"
import { ArrowDownToDot as ArrowDownToDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownToDotProps = LucideIconProps

/**
 * `ArrowDownToDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownToDot = forwardRef<ArrowDownToDotProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowDownToDotIcon} {...props} />,
)
