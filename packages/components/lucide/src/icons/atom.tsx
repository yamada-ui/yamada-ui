import { forwardRef } from "@yamada-ui/core"
import { Atom as AtomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AtomProps = LucideIconProps

/**
 * `Atom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Atom = forwardRef<AtomProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AtomIcon} {...props} />
))
