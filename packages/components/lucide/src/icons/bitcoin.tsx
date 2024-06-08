import { forwardRef } from "@yamada-ui/core"
import { Bitcoin as BitcoinIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BitcoinProps = LucideIconProps

/**
 * `Bitcoin` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bitcoin = forwardRef<BitcoinProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BitcoinIcon} {...props} />
))
