import { forwardRef } from "@yamada-ui/core"
import { Pointer as PointerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PointerProps = LucideIconProps

/**
 * `Pointer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pointer = forwardRef<PointerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PointerIcon} {...props} />
))
