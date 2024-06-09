import { forwardRef } from "@yamada-ui/core"
import { SquareScissors as SquareScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareScissorsProps = LucideIconProps

/**
 * `SquareScissors` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareScissors = forwardRef<SquareScissorsProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareScissorsIcon} {...props} />,
)
