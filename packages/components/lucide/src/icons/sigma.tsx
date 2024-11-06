import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sigma as LucideSigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SigmaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSigmaIcon} {...props} />
))

/**
 * @deprecated Use `SigmaIcon` instead.
 */
export const Sigma = SigmaIcon
