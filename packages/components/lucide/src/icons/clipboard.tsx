import { forwardRef } from "@yamada-ui/core"
import { Clipboard as ClipboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardProps = LucideIconProps

/**
 * `Clipboard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clipboard = forwardRef<ClipboardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ClipboardIcon} {...props} />
))
