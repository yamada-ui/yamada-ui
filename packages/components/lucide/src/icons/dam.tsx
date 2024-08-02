import { forwardRef } from "@yamada-ui/core"
import { Dam as DamIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DamProps = LucideIconProps

/**
 * `Dam` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dam = forwardRef<DamProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DamIcon} {...props} />
))
