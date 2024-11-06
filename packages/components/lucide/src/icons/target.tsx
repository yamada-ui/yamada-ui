import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Target as LucideTargetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TargetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TargetIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTargetIcon} {...props} />
))

/**
 * @deprecated Use `TargetIcon` instead.
 */
export const Target = TargetIcon
