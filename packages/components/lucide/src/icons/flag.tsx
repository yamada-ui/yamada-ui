import { forwardRef } from "@yamada-ui/core"
import { Flag as FlagIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlagProps = LucideIconProps

/**
 * `Flag` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flag = forwardRef<FlagProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlagIcon} {...props} />
))
