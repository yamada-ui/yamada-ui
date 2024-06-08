import { forwardRef } from "@yamada-ui/core"
import { Apple as AppleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AppleProps = LucideIconProps

/**
 * `Apple` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Apple = forwardRef<AppleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AppleIcon} {...props} />
))
