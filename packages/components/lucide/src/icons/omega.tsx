import { forwardRef } from "@yamada-ui/core"
import { Omega as OmegaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type OmegaProps = LucideIconProps

/**
 * `Omega` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Omega = forwardRef<OmegaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={OmegaIcon} {...props} />
))
