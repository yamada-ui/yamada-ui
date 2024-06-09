import { forwardRef } from "@yamada-ui/core"
import { Type as TypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TypeProps = LucideIconProps

/**
 * `Type` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Type = forwardRef<TypeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TypeIcon} {...props} />
))
