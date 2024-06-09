import { forwardRef } from "@yamada-ui/core"
import { Croissant as CroissantIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CroissantProps = LucideIconProps

/**
 * `Croissant` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Croissant = forwardRef<CroissantProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CroissantIcon} {...props} />
))
