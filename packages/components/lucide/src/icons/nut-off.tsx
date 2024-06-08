import { forwardRef } from "@yamada-ui/core"
import { NutOff as NutOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NutOffProps = LucideIconProps

/**
 * `NutOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NutOff = forwardRef<NutOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NutOffIcon} {...props} />
))
