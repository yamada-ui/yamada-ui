import { forwardRef } from "@yamada-ui/core"
import { WandSparkles as WandSparklesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WandSparklesProps = LucideIconProps

/**
 * `WandSparkles` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WandSparkles = forwardRef<WandSparklesProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={WandSparklesIcon} {...props} />,
)
