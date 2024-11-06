import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WandSparkles as LucideWandSparklesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WandSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WandSparklesIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideWandSparklesIcon} {...props} />
  ),
)

/**
 * @deprecated Use `WandSparklesIcon` instead.
 */
export const WandSparkles = WandSparklesIcon
