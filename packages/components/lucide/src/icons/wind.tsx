import { forwardRef } from "@yamada-ui/core"
import { Wind as WindIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WindProps = LucideIconProps

/**
 * `Wind` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wind = forwardRef<WindProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WindIcon} {...props} />
))
