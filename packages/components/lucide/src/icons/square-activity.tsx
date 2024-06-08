import { forwardRef } from "@yamada-ui/core"
import { SquareActivity as SquareActivityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareActivityProps = LucideIconProps

/**
 * `SquareActivity` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareActivity = forwardRef<SquareActivityProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareActivityIcon} {...props} />,
)
