import { forwardRef } from "@yamada-ui/core"
import { Stethoscope as StethoscopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StethoscopeProps = LucideIconProps

/**
 * `Stethoscope` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Stethoscope = forwardRef<StethoscopeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StethoscopeIcon} {...props} />
))
