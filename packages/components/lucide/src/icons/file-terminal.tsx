import { forwardRef } from "@yamada-ui/core"
import { FileTerminal as FileTerminalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileTerminalProps = LucideIconProps

/**
 * `FileTerminal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileTerminal = forwardRef<FileTerminalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileTerminalIcon} {...props} />,
)
