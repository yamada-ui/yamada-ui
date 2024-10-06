import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RefreshCcwDot as RefreshCcwDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RefreshCcwDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCcwDot = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RefreshCcwDotIcon} {...props} />,
)
