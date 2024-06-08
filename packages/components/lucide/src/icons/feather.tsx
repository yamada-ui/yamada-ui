import { forwardRef } from "@yamada-ui/core"
import { Feather as FeatherIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FeatherProps = LucideIconProps

/**
 * `Feather` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Feather = forwardRef<FeatherProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FeatherIcon} {...props} />
))
