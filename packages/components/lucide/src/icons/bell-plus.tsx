import { forwardRef } from "@yamada-ui/core"
import { BellPlus as BellPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellPlusProps = LucideIconProps

/**
 * `BellPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellPlus = forwardRef<BellPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BellPlusIcon} {...props} />
))
