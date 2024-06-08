import { forwardRef } from "@yamada-ui/core"
import { LoaderPinwheel as LoaderPinwheelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LoaderPinwheelProps = LucideIconProps

/**
 * `LoaderPinwheel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderPinwheel = forwardRef<LoaderPinwheelProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LoaderPinwheelIcon} {...props} />,
)
