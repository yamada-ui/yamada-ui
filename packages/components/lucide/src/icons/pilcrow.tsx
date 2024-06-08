import { forwardRef } from "@yamada-ui/core"
import { Pilcrow as PilcrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PilcrowProps = LucideIconProps

/**
 * `Pilcrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pilcrow = forwardRef<PilcrowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PilcrowIcon} {...props} />
))
