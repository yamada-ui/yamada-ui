import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePlus as CirclePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlus = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CirclePlusIcon} {...props} />
))
