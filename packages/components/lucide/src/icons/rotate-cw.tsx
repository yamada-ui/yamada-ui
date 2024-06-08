import { forwardRef } from "@yamada-ui/core"
import { RotateCw as RotateCwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RotateCwProps = LucideIconProps

/**
 * `RotateCw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCw = forwardRef<RotateCwProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RotateCwIcon} {...props} />
))
