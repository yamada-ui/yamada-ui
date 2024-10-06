import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveDiagonal2 as MoveDiagonal2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveDiagonal2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDiagonal2 = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MoveDiagonal2Icon} {...props} />,
)
