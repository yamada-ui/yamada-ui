import { forwardRef } from "@yamada-ui/core"
import { Ear as EarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EarProps = LucideIconProps

/**
 * `Ear` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ear = forwardRef<EarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EarIcon} {...props} />
))
