import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowLeft as LucideArrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideArrowLeftIcon} {...props} />,
)

/**
 * @deprecated Use `ArrowLeftIcon` instead.
 */
export const ArrowLeft = ArrowLeftIcon
