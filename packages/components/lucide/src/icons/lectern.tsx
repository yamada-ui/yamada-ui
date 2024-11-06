import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Lectern as LucideLecternIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LecternIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LecternIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLecternIcon} {...props} />
))

/**
 * @deprecated Use `LecternIcon` instead.
 */
export const Lectern = LecternIcon
