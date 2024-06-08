import { forwardRef } from "@yamada-ui/core"
import { FishOff as FishOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FishOffProps = LucideIconProps

/**
 * `FishOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishOff = forwardRef<FishOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FishOffIcon} {...props} />
))
