import { forwardRef } from "@yamada-ui/core"
import { Microchip as MicrochipIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MicrochipProps = LucideIconProps

/**
 * `Microchip` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Microchip = forwardRef<MicrochipProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicrochipIcon} {...props} />
))
