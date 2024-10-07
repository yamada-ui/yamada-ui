import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Megaphone as MegaphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Megaphone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Megaphone = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MegaphoneIcon} {...props} />
))
