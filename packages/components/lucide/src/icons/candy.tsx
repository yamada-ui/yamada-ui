import { forwardRef } from "@yamada-ui/core"
import { Candy as CandyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CandyProps = LucideIconProps

/**
 * `Candy` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Candy = forwardRef<CandyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CandyIcon} {...props} />
))
