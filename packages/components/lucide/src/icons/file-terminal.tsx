import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileTerminal as LucideFileTerminalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileTerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileTerminalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFileTerminalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FileTerminalIcon` instead.
 */
export const FileTerminal = FileTerminalIcon
