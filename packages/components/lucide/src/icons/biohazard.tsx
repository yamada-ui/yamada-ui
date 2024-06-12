import { forwardRef } from "@yamada-ui/core"
import { Biohazard as BiohazardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BiohazardProps = LucideIconProps

/**
 * `Biohazard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Biohazard = forwardRef<BiohazardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BiohazardIcon} {...props} />
))
