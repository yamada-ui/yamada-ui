import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Terminal as LucideTerminalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TerminalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTerminalIcon} {...props} />
))

/**
 * @deprecated Use `TerminalIcon` instead.
 */
export const Terminal = TerminalIcon
