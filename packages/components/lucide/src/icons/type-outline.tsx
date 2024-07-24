import { forwardRef } from "@yamada-ui/core"
import { TypeOutline as TypeOutlineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TypeOutlineProps = LucideIconProps

/**
 * `TypeOutline` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TypeOutline = forwardRef<TypeOutlineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TypeOutlineIcon} {...props} />
))
