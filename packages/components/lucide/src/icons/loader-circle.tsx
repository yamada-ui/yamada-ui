import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LoaderCircle as LucideLoaderCircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LoaderCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderCircleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLoaderCircleIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LoaderCircleIcon` instead.
 */
export const LoaderCircle = LoaderCircleIcon
