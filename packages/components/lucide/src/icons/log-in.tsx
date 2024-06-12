import { forwardRef } from "@yamada-ui/core"
import { LogIn as LogInIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LogInProps = LucideIconProps

/**
 * `LogIn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogIn = forwardRef<LogInProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LogInIcon} {...props} />
))
