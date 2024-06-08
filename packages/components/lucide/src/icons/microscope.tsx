import { forwardRef } from "@yamada-ui/core"
import { Microscope as MicroscopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MicroscopeProps = LucideIconProps

/**
 * `Microscope` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Microscope = forwardRef<MicroscopeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MicroscopeIcon} {...props} />
))
