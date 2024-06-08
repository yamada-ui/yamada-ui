import { forwardRef } from "@yamada-ui/core"
import { Eclipse as EclipseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EclipseProps = LucideIconProps

/**
 * `Eclipse` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Eclipse = forwardRef<EclipseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EclipseIcon} {...props} />
))
