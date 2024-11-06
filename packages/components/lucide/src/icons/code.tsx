import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Code as LucideCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCodeIcon} {...props} />
))

/**
 * @deprecated Use `CodeIcon` instead.
 */
export const Code = CodeIcon
