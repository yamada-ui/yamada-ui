import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReplaceAll as LucideReplaceAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReplaceAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplaceAllIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideReplaceAllIcon} {...props} />,
)

/**
 * @deprecated Use `ReplaceAllIcon` instead.
 */
export const ReplaceAll = ReplaceAllIcon
