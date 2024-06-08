import { forwardRef } from "@yamada-ui/core"
import { Redo2 as Redo2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Redo2Props = LucideIconProps

/**
 * `Redo2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Redo2 = forwardRef<Redo2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Redo2Icon} {...props} />
))
