import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Footprints as LucideFootprintsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FootprintsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FootprintsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFootprintsIcon} {...props} />,
)

/**
 * @deprecated Use `FootprintsIcon` instead.
 */
export const Footprints = FootprintsIcon
