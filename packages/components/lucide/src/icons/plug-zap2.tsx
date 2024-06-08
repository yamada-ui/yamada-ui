import { forwardRef } from "@yamada-ui/core"
import { PlugZap2 as PlugZap2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PlugZap2Props = LucideIconProps

/**
 * `PlugZap2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlugZap2 = forwardRef<PlugZap2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PlugZap2Icon} {...props} />
))
