import { forwardRef } from "@yamada-ui/core"
import { SquareAsterisk as SquareAsteriskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareAsteriskProps = LucideIconProps

/**
 * `SquareAsterisk` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareAsterisk = forwardRef<SquareAsteriskProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareAsteriskIcon} {...props} />,
)
