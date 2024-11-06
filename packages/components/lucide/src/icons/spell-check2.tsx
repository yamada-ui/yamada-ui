import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SpellCheck2 as LucideSpellCheck2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SpellCheck2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpellCheck2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSpellCheck2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `SpellCheck2Icon` instead.
 */
export const SpellCheck2 = SpellCheck2Icon
