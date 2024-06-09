import { forwardRef } from "@yamada-ui/core"
import { Zap as ZapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ZapProps = LucideIconProps

/**
 * `Zap` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Zap = forwardRef<ZapProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ZapIcon} {...props} />
))
