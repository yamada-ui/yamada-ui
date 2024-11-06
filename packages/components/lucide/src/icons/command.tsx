import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Command as LucideCommandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CommandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CommandIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCommandIcon} {...props} />
))

/**
 * @deprecated Use `CommandIcon` instead.
 */
export const Command = CommandIcon
