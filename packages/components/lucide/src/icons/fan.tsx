import { forwardRef } from "@yamada-ui/core"
import { Fan as FanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FanProps = LucideIconProps

/**
 * `Fan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Fan = forwardRef<FanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FanIcon} {...props} />
))
