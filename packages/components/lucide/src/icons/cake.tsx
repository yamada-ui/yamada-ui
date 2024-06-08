import { forwardRef } from "@yamada-ui/core"
import { Cake as CakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CakeProps = LucideIconProps

/**
 * `Cake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cake = forwardRef<CakeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CakeIcon} {...props} />
))
