import { forwardRef } from "@yamada-ui/core"
import { CornerDownLeft as CornerDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CornerDownLeftProps = LucideIconProps

/**
 * `CornerDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerDownLeft = forwardRef<CornerDownLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerDownLeftIcon} {...props} />,
)
