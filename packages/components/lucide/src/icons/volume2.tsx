import { forwardRef } from "@yamada-ui/core"
import { Volume2 as Volume2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Volume2Props = LucideIconProps

/**
 * `Volume2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume2 = forwardRef<Volume2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Volume2Icon} {...props} />
))
