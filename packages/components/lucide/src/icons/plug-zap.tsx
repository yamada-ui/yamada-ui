import { forwardRef } from "@yamada-ui/core"
import { PlugZap as PlugZapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PlugZapProps = LucideIconProps

/**
 * `PlugZap` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlugZap = forwardRef<PlugZapProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PlugZapIcon} {...props} />
))
