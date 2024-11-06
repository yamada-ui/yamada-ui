import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Loader as LucideLoaderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LoaderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LoaderIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLoaderIcon} {...props} />
))

/**
 * @deprecated Use `LoaderIcon` instead.
 */
export const Loader = LoaderIcon
