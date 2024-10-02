import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LoaderPinwheel as LoaderPinwheelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LoaderPinwheel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderPinwheel = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LoaderPinwheelIcon} {...props} />,
)
