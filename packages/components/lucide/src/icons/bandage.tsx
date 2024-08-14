import { forwardRef } from "@yamada-ui/core"
import { Bandage as BandageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BandageProps = LucideIconProps

/**
 * `Bandage` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bandage = forwardRef<BandageProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BandageIcon} {...props} />
))
