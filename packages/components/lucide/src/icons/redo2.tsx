import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Redo2 as LucideRedo2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Redo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Redo2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRedo2Icon} {...props} />
))

/**
 * @deprecated Use `Redo2Icon` instead.
 */
export const Redo2 = Redo2Icon
