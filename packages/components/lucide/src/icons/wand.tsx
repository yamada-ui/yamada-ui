import { forwardRef } from "@yamada-ui/core"
import { Wand as WandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WandProps = LucideIconProps

/**
 * `Wand` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wand = forwardRef<WandProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WandIcon} {...props} />
))
