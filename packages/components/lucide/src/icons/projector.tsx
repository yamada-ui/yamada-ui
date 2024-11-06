import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Projector as LucideProjectorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ProjectorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ProjectorIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideProjectorIcon} {...props} />,
)

/**
 * @deprecated Use `ProjectorIcon` instead.
 */
export const Projector = ProjectorIcon
