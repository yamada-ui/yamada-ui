import { forwardRef } from "@yamada-ui/core"
import { Instagram as InstagramIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Instagram` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Instagram = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={InstagramIcon} {...props} />
))
