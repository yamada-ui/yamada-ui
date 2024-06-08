import { forwardRef } from "@yamada-ui/core"
import { Baby as BabyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BabyProps = LucideIconProps

/**
 * `Baby` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Baby = forwardRef<BabyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BabyIcon} {...props} />
))
