import { forwardRef } from "@yamada-ui/core"
import { Loader as LoaderIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Loader` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Loader = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LoaderIcon} {...props} />
))
