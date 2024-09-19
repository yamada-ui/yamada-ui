import { forwardRef } from "@yamada-ui/core"
import { CircleArrowLeft as CircleArrowLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `CircleArrowLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowLeft = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleArrowLeftIcon} {...props} />,
)
