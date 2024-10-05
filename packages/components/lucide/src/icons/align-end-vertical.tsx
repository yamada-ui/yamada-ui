import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignEndVertical as AlignEndVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignEndVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignEndVertical = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AlignEndVerticalIcon} {...props} />,
)
