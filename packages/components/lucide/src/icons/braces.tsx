import { forwardRef } from "@yamada-ui/core"
import { Braces as BracesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Braces` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Braces = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BracesIcon} {...props} />
))
