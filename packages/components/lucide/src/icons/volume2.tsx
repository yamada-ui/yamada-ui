import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Volume2 as LucideVolume2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Volume2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVolume2Icon} {...props} />
))

/**
 * @deprecated Use `Volume2Icon` instead.
 */
export const Volume2 = Volume2Icon
