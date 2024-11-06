import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Instagram as LucideInstagramIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `InstagramIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InstagramIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideInstagramIcon} {...props} />,
)

/**
 * @deprecated Use `InstagramIcon` instead.
 */
export const Instagram = InstagramIcon
