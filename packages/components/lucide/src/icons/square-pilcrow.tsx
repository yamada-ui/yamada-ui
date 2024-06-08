import { forwardRef } from "@yamada-ui/core"
import { SquarePilcrow as SquarePilcrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquarePilcrowProps = LucideIconProps

/**
 * `SquarePilcrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePilcrow = forwardRef<SquarePilcrowProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquarePilcrowIcon} {...props} />,
)
