import { forwardRef } from "@yamada-ui/core"
import { SpellCheck2 as SpellCheck2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SpellCheck2Props = LucideIconProps

/**
 * `SpellCheck2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpellCheck2 = forwardRef<SpellCheck2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SpellCheck2Icon} {...props} />
))
