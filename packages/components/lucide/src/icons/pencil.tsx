import { forwardRef } from "@yamada-ui/core"
import { Pencil as PencilIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PencilProps = LucideIconProps

/**
 * `Pencil` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pencil = forwardRef<PencilProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PencilIcon} {...props} />
))
