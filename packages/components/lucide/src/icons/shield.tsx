import { forwardRef } from "@yamada-ui/core"
import { Shield as ShieldIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShieldProps = LucideIconProps

/**
 * `Shield` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shield = forwardRef<ShieldProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShieldIcon} {...props} />
))
