import { forwardRef } from "@yamada-ui/core"
import { Scale as ScaleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScaleProps = LucideIconProps

/**
 * `Scale` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scale = forwardRef<ScaleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScaleIcon} {...props} />
))
