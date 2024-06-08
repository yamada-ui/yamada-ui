import { forwardRef } from "@yamada-ui/core"
import { FlagOff as FlagOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlagOffProps = LucideIconProps

/**
 * `FlagOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagOff = forwardRef<FlagOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlagOffIcon} {...props} />
))
