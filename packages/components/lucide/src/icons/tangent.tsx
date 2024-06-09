import { forwardRef } from "@yamada-ui/core"
import { Tangent as TangentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TangentProps = LucideIconProps

/**
 * `Tangent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tangent = forwardRef<TangentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TangentIcon} {...props} />
))
