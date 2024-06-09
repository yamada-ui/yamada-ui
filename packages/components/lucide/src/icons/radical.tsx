import { forwardRef } from "@yamada-ui/core"
import { Radical as RadicalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RadicalProps = LucideIconProps

/**
 * `Radical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Radical = forwardRef<RadicalProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RadicalIcon} {...props} />
))
