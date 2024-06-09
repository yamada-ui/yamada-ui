import { forwardRef } from "@yamada-ui/core"
import { CornerRightDown as CornerRightDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CornerRightDownProps = LucideIconProps

/**
 * `CornerRightDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerRightDown = forwardRef<CornerRightDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerRightDownIcon} {...props} />,
)
