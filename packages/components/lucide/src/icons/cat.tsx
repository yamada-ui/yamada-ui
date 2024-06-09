import { forwardRef } from "@yamada-ui/core"
import { Cat as CatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CatProps = LucideIconProps

/**
 * `Cat` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cat = forwardRef<CatProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CatIcon} {...props} />
))
