import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartColumnBig as ChartColumnBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartColumnBig` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnBig = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChartColumnBigIcon} {...props} />,
)
