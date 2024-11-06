import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Croissant as LucideCroissantIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CroissantIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CroissantIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCroissantIcon} {...props} />,
)

/**
 * @deprecated Use `CroissantIcon` instead.
 */
export const Croissant = CroissantIcon
