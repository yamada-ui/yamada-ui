import { forwardRef } from "@yamada-ui/core"
import { Projector as ProjectorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ProjectorProps = LucideIconProps

/**
 * `Projector` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Projector = forwardRef<ProjectorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ProjectorIcon} {...props} />
))
