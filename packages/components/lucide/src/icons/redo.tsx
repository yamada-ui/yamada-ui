import { forwardRef } from "@yamada-ui/core"
import { Redo as RedoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RedoProps = LucideIconProps

/**
 * `Redo` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Redo = forwardRef<RedoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RedoIcon} {...props} />
))
