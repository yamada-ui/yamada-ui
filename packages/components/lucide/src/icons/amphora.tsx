import { forwardRef } from "@yamada-ui/core"
import { Amphora as AmphoraIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AmphoraProps = LucideIconProps

/**
 * `Amphora` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Amphora = forwardRef<AmphoraProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AmphoraIcon} {...props} />
))
