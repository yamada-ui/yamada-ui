import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SpellCheck as LucideSpellCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SpellCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpellCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSpellCheckIcon} {...props} />,
)

/**
 * @deprecated Use `SpellCheckIcon` instead.
 */
export const SpellCheck = SpellCheckIcon
