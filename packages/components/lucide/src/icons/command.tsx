import { forwardRef } from "@yamada-ui/core"
import { Command as CommandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CommandProps = LucideIconProps

/**
 * `Command` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Command = forwardRef<CommandProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CommandIcon} {...props} />
))
