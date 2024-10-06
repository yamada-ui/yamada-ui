import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Stethoscope as StethoscopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Stethoscope` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Stethoscope = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StethoscopeIcon} {...props} />
))
