import { forwardRef } from "@yamada-ui/core"
import { Siren as SirenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SirenProps = LucideIconProps

/**
 * `Siren` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Siren = forwardRef<SirenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SirenIcon} {...props} />
))
