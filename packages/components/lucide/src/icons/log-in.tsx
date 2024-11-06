import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LogIn as LucideLogInIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LogInIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogInIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLogInIcon} {...props} />
))

/**
 * @deprecated Use `LogInIcon` instead.
 */
export const LogIn = LogInIcon
