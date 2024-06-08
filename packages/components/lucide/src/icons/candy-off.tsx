import { forwardRef } from "@yamada-ui/core"
import { CandyOff as CandyOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CandyOffProps = LucideIconProps

/**
 * `CandyOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyOff = forwardRef<CandyOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CandyOffIcon} {...props} />
))
