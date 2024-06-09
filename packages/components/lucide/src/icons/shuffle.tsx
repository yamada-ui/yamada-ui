import { forwardRef } from "@yamada-ui/core"
import { Shuffle as ShuffleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShuffleProps = LucideIconProps

/**
 * `Shuffle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Shuffle = forwardRef<ShuffleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShuffleIcon} {...props} />
))
