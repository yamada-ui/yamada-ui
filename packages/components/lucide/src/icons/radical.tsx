import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Radical as LucideRadicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadicalIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRadicalIcon} {...props} />
))

/**
 * @deprecated Use `RadicalIcon` instead.
 */
export const Radical = RadicalIcon
