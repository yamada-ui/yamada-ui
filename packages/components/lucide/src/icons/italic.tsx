import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Italic as LucideItalicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ItalicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ItalicIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideItalicIcon} {...props} />
))

/**
 * @deprecated Use `ItalicIcon` instead.
 */
export const Italic = ItalicIcon
