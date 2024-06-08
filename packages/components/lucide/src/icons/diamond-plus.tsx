import { forwardRef } from "@yamada-ui/core"
import { DiamondPlus as DiamondPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DiamondPlusProps = LucideIconProps

/**
 * `DiamondPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DiamondPlus = forwardRef<DiamondPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DiamondPlusIcon} {...props} />
))
