import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sofa as LucideSofaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SofaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SofaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSofaIcon} {...props} />
))

/**
 * @deprecated Use `SofaIcon` instead.
 */
export const Sofa = SofaIcon
