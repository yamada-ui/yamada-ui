import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveDiagonal2 as LucideMoveDiagonal2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveDiagonal2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDiagonal2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMoveDiagonal2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `MoveDiagonal2Icon` instead.
 */
export const MoveDiagonal2 = MoveDiagonal2Icon
