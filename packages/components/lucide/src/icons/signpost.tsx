import { forwardRef } from "@yamada-ui/core"
import { Signpost as SignpostIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SignpostProps = LucideIconProps

/**
 * `Signpost` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Signpost = forwardRef<SignpostProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SignpostIcon} {...props} />
))
