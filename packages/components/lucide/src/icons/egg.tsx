import { forwardRef } from "@yamada-ui/core"
import { Egg as EggIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EggProps = LucideIconProps

/**
 * `Egg` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Egg = forwardRef<EggProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EggIcon} {...props} />
))
