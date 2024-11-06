import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Codepen as LucideCodepenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CodepenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodepenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCodepenIcon} {...props} />
))

/**
 * @deprecated Use `CodepenIcon` instead.
 */
export const Codepen = CodepenIcon
