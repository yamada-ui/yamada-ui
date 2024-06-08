import { forwardRef } from "@yamada-ui/core"
import { Shirt as ShirtIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShirtProps = LucideIconProps

/**
 * `Shirt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shirt = forwardRef<ShirtProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShirtIcon} {...props} />
))
