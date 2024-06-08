import { forwardRef } from "@yamada-ui/core"
import { CandyCane as CandyCaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CandyCaneProps = LucideIconProps

/**
 * `CandyCane` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyCane = forwardRef<CandyCaneProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CandyCaneIcon} {...props} />
))
