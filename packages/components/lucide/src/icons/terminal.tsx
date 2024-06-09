import { forwardRef } from "@yamada-ui/core"
import { Terminal as TerminalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TerminalProps = LucideIconProps

/**
 * `Terminal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Terminal = forwardRef<TerminalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TerminalIcon} {...props} />
))
