import { forwardRef } from "@yamada-ui/core"
import { Recycle as RecycleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RecycleProps = LucideIconProps

/**
 * `Recycle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Recycle = forwardRef<RecycleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RecycleIcon} {...props} />
))
