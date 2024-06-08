import { forwardRef } from "@yamada-ui/core"
import { CakeSlice as CakeSliceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CakeSliceProps = LucideIconProps

/**
 * `CakeSlice` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CakeSlice = forwardRef<CakeSliceProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CakeSliceIcon} {...props} />
))
