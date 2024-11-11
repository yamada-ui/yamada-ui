import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { FileTerminal as OriginalFileTerminal } from "lucide-react"

/**
 * `FileTerminalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileTerminalIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalFileTerminal} {...props} />
))

/**
 * `FileTerminal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FileTerminalIcon` instead.
 */
export const FileTerminal = FileTerminalIcon
