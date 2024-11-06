import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Slash as LucideSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlashIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSlashIcon} {...props} />
))

/**
 * @deprecated Use `SlashIcon` instead.
 */
export const Slash = SlashIcon
