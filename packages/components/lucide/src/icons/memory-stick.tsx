import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MemoryStick as MemoryStickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MemoryStick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MemoryStick = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MemoryStickIcon} {...props} />
))
