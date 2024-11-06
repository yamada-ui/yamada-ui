import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cog as LucideCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CogIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCogIcon} {...props} />
))

/**
 * @deprecated Use `CogIcon` instead.
 */
export const Cog = CogIcon
