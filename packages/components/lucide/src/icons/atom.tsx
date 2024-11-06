import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Atom as LucideAtomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AtomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AtomIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAtomIcon} {...props} />
))

/**
 * @deprecated Use `AtomIcon` instead.
 */
export const Atom = AtomIcon
