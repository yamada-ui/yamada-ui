import { forwardRef } from "@yamada-ui/core"
import { Volume1 as Volume1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Volume1Props = LucideIconProps

/**
 * `Volume1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume1 = forwardRef<Volume1Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Volume1Icon} {...props} />
))
