import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Headphones as LucideHeadphonesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeadphonesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadphonesIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHeadphonesIcon} {...props} />,
)

/**
 * @deprecated Use `HeadphonesIcon` instead.
 */
export const Headphones = HeadphonesIcon
