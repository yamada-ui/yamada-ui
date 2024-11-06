import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Omega as LucideOmegaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OmegaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OmegaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideOmegaIcon} {...props} />
))

/**
 * @deprecated Use `OmegaIcon` instead.
 */
export const Omega = OmegaIcon
