import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Twitter as LucideTwitterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TwitterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TwitterIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTwitterIcon} {...props} />
))

/**
 * @deprecated Use `TwitterIcon` instead.
 */
export const Twitter = TwitterIcon
