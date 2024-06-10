import { forwardRef } from "@yamada-ui/core"
import { LampDesk as LampDeskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LampDeskProps = LucideIconProps

/**
 * `LampDesk` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampDesk = forwardRef<LampDeskProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LampDeskIcon} {...props} />
))
