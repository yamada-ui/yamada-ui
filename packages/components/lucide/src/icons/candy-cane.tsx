import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CandyCane as CandyCaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CandyCane` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandyCane = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CandyCaneIcon} {...props} />
))
