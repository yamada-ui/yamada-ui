import { forwardRef } from "@yamada-ui/core"
import { Combine as CombineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CombineProps = LucideIconProps

/**
 * `Combine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Combine = forwardRef<CombineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CombineIcon} {...props} />
))
