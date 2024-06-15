import { forwardRef } from "@yamada-ui/core"
import { ArrowDownLeft as ArrowDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownLeftProps = LucideIconProps

/**
 * `ArrowDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownLeft = forwardRef<ArrowDownLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowDownLeftIcon} {...props} />,
)
