import { forwardRef } from "@yamada-ui/core"
import { Plug as PlugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PlugProps = LucideIconProps

/**
 * `Plug` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Plug = forwardRef<PlugProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PlugIcon} {...props} />
))
