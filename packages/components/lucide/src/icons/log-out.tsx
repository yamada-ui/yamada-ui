import { forwardRef } from "@yamada-ui/core"
import { LogOut as LogOutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LogOutProps = LucideIconProps

/**
 * `LogOut` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LogOut = forwardRef<LogOutProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LogOutIcon} {...props} />
))
