import { forwardRef } from "@yamada-ui/core"
import { Weight as WeightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WeightProps = LucideIconProps

/**
 * `Weight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Weight = forwardRef<WeightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WeightIcon} {...props} />
))
