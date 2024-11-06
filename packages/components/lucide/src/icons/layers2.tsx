import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Layers2 as LucideLayers2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Layers2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Layers2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLayers2Icon} {...props} />
))

/**
 * @deprecated Use `Layers2Icon` instead.
 */
export const Layers2 = Layers2Icon
