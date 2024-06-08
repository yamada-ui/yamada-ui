import { forwardRef } from "@yamada-ui/core"
import { EqualNot as EqualNotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EqualNotProps = LucideIconProps

/**
 * `EqualNot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EqualNot = forwardRef<EqualNotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EqualNotIcon} {...props} />
))
