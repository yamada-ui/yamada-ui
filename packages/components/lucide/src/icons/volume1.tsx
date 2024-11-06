import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Volume1 as LucideVolume1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Volume1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume1Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVolume1Icon} {...props} />
))

/**
 * @deprecated Use `Volume1Icon` instead.
 */
export const Volume1 = Volume1Icon
