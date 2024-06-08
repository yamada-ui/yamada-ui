import { forwardRef } from "@yamada-ui/core"
import { CornerLeftDown as CornerLeftDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CornerLeftDownProps = LucideIconProps

/**
 * `CornerLeftDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftDown = forwardRef<CornerLeftDownProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerLeftDownIcon} {...props} />,
)
