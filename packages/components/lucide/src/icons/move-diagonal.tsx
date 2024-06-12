import { forwardRef } from "@yamada-ui/core"
import { MoveDiagonal as MoveDiagonalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoveDiagonalProps = LucideIconProps

/**
 * `MoveDiagonal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDiagonal = forwardRef<MoveDiagonalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveDiagonalIcon} {...props} />,
)
