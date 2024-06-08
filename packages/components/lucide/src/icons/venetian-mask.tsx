import { forwardRef } from "@yamada-ui/core"
import { VenetianMask as VenetianMaskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VenetianMaskProps = LucideIconProps

/**
 * `VenetianMask` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VenetianMask = forwardRef<VenetianMaskProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={VenetianMaskIcon} {...props} />,
)
