import { forwardRef } from "@yamada-ui/core"
import { Cpu as CpuIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CpuProps = LucideIconProps

/**
 * `Cpu` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cpu = forwardRef<CpuProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CpuIcon} {...props} />
))
