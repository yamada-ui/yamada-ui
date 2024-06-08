import { forwardRef } from "@yamada-ui/core"
import { Pen as PenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PenProps = LucideIconProps

/**
 * `Pen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pen = forwardRef<PenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PenIcon} {...props} />
))
