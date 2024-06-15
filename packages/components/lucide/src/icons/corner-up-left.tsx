import { forwardRef } from "@yamada-ui/core"
import { CornerUpLeft as CornerUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CornerUpLeftProps = LucideIconProps

/**
 * `CornerUpLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpLeft = forwardRef<CornerUpLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerUpLeftIcon} {...props} />,
)
