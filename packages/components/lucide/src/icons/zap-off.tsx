import { forwardRef } from "@yamada-ui/core"
import { ZapOff as ZapOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ZapOffProps = LucideIconProps

/**
 * `ZapOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZapOff = forwardRef<ZapOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ZapOffIcon} {...props} />
))
