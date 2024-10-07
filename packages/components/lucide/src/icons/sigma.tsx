import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sigma as SigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Sigma` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sigma = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SigmaIcon} {...props} />
))
