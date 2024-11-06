import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cpu as LucideCpuIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CpuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CpuIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCpuIcon} {...props} />
))

/**
 * @deprecated Use `CpuIcon` instead.
 */
export const Cpu = CpuIcon
