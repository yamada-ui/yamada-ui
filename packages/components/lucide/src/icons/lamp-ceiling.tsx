import { forwardRef } from "@yamada-ui/core"
import { LampCeiling as LampCeilingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LampCeilingProps = LucideIconProps

/**
 * `LampCeiling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampCeiling = forwardRef<LampCeilingProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LampCeilingIcon} {...props} />
))
