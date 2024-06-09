import { forwardRef } from "@yamada-ui/core"
import { Salad as SaladIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SaladProps = LucideIconProps

/**
 * `Salad` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Salad = forwardRef<SaladProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SaladIcon} {...props} />
))
